import { PokemonCard } from '@/features/pokemon-cards/interface/PokemonCard.ts'
import { createSlice } from '@reduxjs/toolkit'

interface PokemonCardSliceType {
    pokemonCards: PokemonCard[]
}

const initialState: PokemonCardSliceType = {
    pokemonCards: [],
}


const pokemonCardsSlice = createSlice({
    name: 'pokemonCards',
    initialState,
    reducers: {},
})


export default pokemonCardsSlice.reducer