import { fetchPokemon } from '@/entities/pokemon/fetch/pokeapi.ts'
import { ExtendedPokemonType } from '@/pages/pokemon/PokedexPage.tsx'
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface PokedexSliceType {
    searchKeyword: string
    generationIndex: number

    pokedexEntry: ExtendedPokemonType | null
}

const initialState: PokedexSliceType = {
    searchKeyword: '',
    generationIndex: 0,

    pokedexEntry: null,
}

export const fetchPokedexEntryByNameOrId = createAsyncThunk(
    'pokemon/pokedex/entry/get',
    async (nameOrId: string | number, { rejectWithValue }) => {
        try {
            return await fetchPokemon(nameOrId)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue('An unknown error occurred')
        }
    }
)

const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState,
    reducers: {
        setSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload
        },
        setGenerationIndex: (state, action) => {
            state.generationIndex = action.payload
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<PokedexSliceType>) => {
        builder
            .addCase(fetchPokedexEntryByNameOrId.fulfilled, (state, { payload }) => {
                state.pokedexEntry = { ...payload, seen: 5, owned: 2 }
            })
    }
})

export const {
    setSearchKeyword,
    setGenerationIndex
} = pokedexSlice.actions
export default pokedexSlice.reducer