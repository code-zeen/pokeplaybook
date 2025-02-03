import { fetchPokemonCard } from '@/entities/pokemon/fetch/pokeapi.ts'
import { ExtendedPokemonCard } from '@/features/pokemon-cards/types/extendedPokemonCard.ts'
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface PokemonCardSliceType {
    isLoading: boolean
    error: string | null

    pokemonCards: ExtendedPokemonCard[]
}

const initialState: PokemonCardSliceType = {
    isLoading: false,
    error: null,

    pokemonCards: [],
}

export const fetchPokemonCardByNameOrId = createAsyncThunk(
    'pokemon/cards/get',
    async (nameOrId: string | number, { rejectWithValue }) => {
        try {
            return await fetchPokemonCard(nameOrId)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue('An unknown error occurred')
        }
    }
)

const pokemonCardsSlice = createSlice({
    name: 'pokemonCards',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<PokemonCardSliceType>) => {
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
                state.isLoading = false
                state.error = null
                const { baseData, ability, move } = payload
                const newCard = {
                    baseData,
                    ability,
                    move,
                    seen: 5,
                    owned: 2,
                }
                state.pokemonCards.push(newCard)
            })
    }
})


export default pokemonCardsSlice.reducer