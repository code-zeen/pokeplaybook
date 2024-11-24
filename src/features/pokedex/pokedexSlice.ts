import { ExtendedPokemonType, PokedexInfo } from "@/pages/pokemon/PokedexPage.tsx";
import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
    isFulfilled,
    isPending,
    isRejected
} from "@reduxjs/toolkit";
import {
    fetchPokedexEntryApiByNameOrId,
    fetchPokedexListApiByGenerationIndex
} from "@/entities/pokemon/fetch/pokeapi.ts";

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

export const fetchPokedexListbyGenerationIndex = createAsyncThunk(
    'pokemon/pokedex/list/get',
    async (index: number, { rejectWithValue }) => {
        try {
            return await fetchPokedexListApiByGenerationIndex(index)
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
            .addCase(fetchPokedexEntryByNameOrId.fulfilled, (state, { payload }) => {
                state.pokemonEntry = { ...payload, seen: 5, owned: 2 }
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

export default pokedexSlice.reducer