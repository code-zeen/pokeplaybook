import { ExtendedPokemonType, PokedexInfo } from "@/pages/pokemon/PokedexPage.tsx";
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokedexEntryApiByNameOrId } from "@/entities/pokemon/fetch/pokeapi.ts";

interface PokedexSliceType {
    isLoading: boolean
    error: string | null

    pokedexList: PokedexInfo[]
    pokemonEntry: ExtendedPokemonType | null
}

const initialState: PokedexSliceType = {
    isLoading: false,
    error: null,

    pokedexList: [],
    pokemonEntry: null,
}

export const fetchPokedexEntryByNameOrId = createAsyncThunk(
    'pokemon/pokedex/get',
    async (nameOrId: string | number, { rejectWithValue }) => {
        try {
            return await fetchPokedexEntryApiByNameOrId(nameOrId)
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
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<PokedexSliceType>) => {
        builder
            .addCase(fetchPokedexEntryByNameOrId.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchPokedexEntryByNameOrId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
            })
            .addCase(fetchPokedexEntryByNameOrId.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.error = null
                state.pokemonEntry = { ...payload, seen: 5, owned: 2 }
            })
    }
})

export default pokedexSlice.reducer