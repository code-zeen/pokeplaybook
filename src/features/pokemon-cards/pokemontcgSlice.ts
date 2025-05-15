import { PokemonCard } from '@/features/pokemon-cards/interface/PokemonCard.ts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemontcgSliceType {
    searchKeyword: string
    pokemonCards: PokemonCard[]
}

const initialState: PokemontcgSliceType = {
    searchKeyword: '',
    pokemonCards: [],
}

const pokemontcgSlice = createSlice({
    name: 'pokemontcg',
    initialState,
    reducers: {
        setSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload
        },
        addPokemonCard: (state, action: PayloadAction<PokemonCard>) => {
            state.pokemonCards = [ ...state.pokemonCards, action.payload ]
        },
    },
})

export const {
    setSearchKeyword,
    addPokemonCard,
} = pokemontcgSlice.actions

export default pokemontcgSlice.reducer