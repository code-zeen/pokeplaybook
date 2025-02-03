import { PokemonCard } from '@/features/pokemon-cards/interface/PokemonCard.ts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonCardSliceType {
    pokemonCards: PokemonCard[]
}

const initialState: PokemonCardSliceType = {
    pokemonCards: [],
}

const pokemonCardsSlice = createSlice({
    name: 'pokemonCards',
    initialState,
    reducers: {
        addPokemonCard: (state, action: PayloadAction<PokemonCard>) => {
            state.pokemonCards = [ ...state.pokemonCards, action.payload ]
        }
    },
})

export const {
    addPokemonCard
} = pokemonCardsSlice.actions

export default pokemonCardsSlice.reducer