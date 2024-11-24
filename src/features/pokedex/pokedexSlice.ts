import { ExtendedPokemonType, PokedexInfo } from "@/pages/pokemon/PokedexPage.tsx";
import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
    isFulfilled,
    isPending,
    isRejected
} from "@reduxjs/toolkit";
import { fetchPokemon, fetchPokemonList } from "@/entities/pokemon/fetch/pokeapi.ts";

interface PokedexSliceType {
    isLoading: boolean
    error: string | null

    searchKeyword: string
    generationIndex: number

    pokedexList: PokedexInfo[]
    pokedexEntry: ExtendedPokemonType | null
}

const initialState: PokedexSliceType = {
    isLoading: false,
    error: null,

    searchKeyword: '',
    generationIndex: 0,

    pokedexList: [],
    pokedexEntry: null,
}

export const fetchPokedexListbyGenerationIndex = createAsyncThunk(
    'pokemon/pokedex/list/get',
    async (index: number, { rejectWithValue }) => {
        try {
            return await fetchPokemonList(index)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue('An unknown error has occured')
        }
    }
)

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
            .addCase(fetchPokedexListbyGenerationIndex.fulfilled, (state, { payload }) => {
                state.pokedexList = payload.results.map((pokemon: { name: string, url: string }) => ({
                    ...pokemon,
                    seen: 5,
                    owned: 2,
                }))
            })
            .addCase(fetchPokedexEntryByNameOrId.fulfilled, (state, { payload }) => {
                state.pokedexEntry = { ...payload, seen: 5, owned: 2 }
            })

            .addMatcher(
                isPending(fetchPokedexListbyGenerationIndex, fetchPokedexEntryByNameOrId), (state) => {
                    state.isLoading = true
                    state.error = null
                }
            )
            .addMatcher(
                isRejected(fetchPokedexListbyGenerationIndex, fetchPokedexEntryByNameOrId), (state, { payload }) => {
                    state.isLoading = false
                    state.error = payload as string
                }
            )
            .addMatcher(
                isFulfilled(fetchPokedexListbyGenerationIndex, fetchPokedexEntryByNameOrId), (state) => {
                    state.isLoading = false
                    state.error = null
                }
            )
    }
})

export const {
    setSearchKeyword,
    setGenerationIndex
} = pokedexSlice.actions
export default pokedexSlice.reducer