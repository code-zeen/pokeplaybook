import { AbilityType } from '@/entities/pokemon/types/abilityType.ts'
import { MoveType } from '@/entities/pokemon/types/moveType.ts'
import { PokemonType } from '@/entities/pokemon/types/pokemonType.ts'
import { fetchPokemonByNameOrId } from '@/features/pokemon-cards/fetch/fetchPokemon.ts'
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface ExtendedPokemonType {
    isLoading: boolean

    baseData: PokemonType | null
    ability: AbilityType | null
    move: MoveType | null
    seen: number | null
    owned: number | null
}

const initialState: ExtendedPokemonType = {
    isLoading: false,

    baseData: null,
    ability: null,
    move: null,
    seen: null,
    owned: null,
}

export const fetchPokemonCardByNameOrId = createAsyncThunk(
    'pokemon/cards/get',
    async (nameOrId: string | number, { rejectWithValue }) => {
        try {
            return await fetchPokemonByNameOrId(nameOrId)
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log('rejectedWithValue: ', error.message)
                return rejectWithValue(error.message)
            } else {
                console.log('rejectedWithValue: ', error)
                return rejectWithValue('An unknown error occurred')
            }
        }
    }
)

export const pokemonCardsSlice = createSlice({
    name: 'pokemonCards',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<ExtendedPokemonType>) => {
        builder
            .addCase(fetchPokemonCardByNameOrId.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPokemonCardByNameOrId.rejected, (state) => {
                state.isLoading = false
                state.baseData = initialState.baseData
                state.ability = initialState.ability
                state.move = initialState.move
            })
            .addCase(fetchPokemonCardByNameOrId.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.baseData = payload.baseData
                state.ability = payload.ability
                state.move = payload.move
            })
    }
})


export default pokemonCardsSlice.reducer