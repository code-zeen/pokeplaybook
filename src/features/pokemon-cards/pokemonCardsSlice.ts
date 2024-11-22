import { fetchPokemonByNameOrId } from '@/features/pokemon-cards/fetch/fetchPokemon.ts'
import { PokemonCardType } from '@/features/pokemon-cards/types/pokemonCardType.ts'
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface ExtendedPokemonType {
    isLoading: boolean
    error: string | null

    pokemonCards: PokemonCardType[]
}

const initialState: ExtendedPokemonType = {
    isLoading: false,
    error: null,

    pokemonCards: [],
}

export const fetchPokemonCardByNameOrId = createAsyncThunk(
    'pokemon/cards/get',
    async (nameOrId: string | number, { rejectWithValue }) => {
        try {
            return await fetchPokemonByNameOrId(nameOrId)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue('An unknown error occurred')
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
                state.error = null
            })
            .addCase(fetchPokemonCardByNameOrId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
            })
            .addCase(fetchPokemonCardByNameOrId.fulfilled, (state, { payload }) => {
                const { baseData, ability, move } = payload
                const newCard = {
                    baseData,
                    ability,
                    move,
                    seen: 5,
                    owned: 2,
                }
                state.isLoading = false
                state.pokemonCards.push(newCard)
                state.error = null
            })
    }
})


export default pokemonCardsSlice.reducer