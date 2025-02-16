import { createSlice } from '@reduxjs/toolkit'

interface PokedexSliceType {
    searchKeyword: string
    generationIndex: number
}

const initialState: PokedexSliceType = {
    searchKeyword: '',
    generationIndex: 0,
}

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
})

export const {
    setSearchKeyword,
    setGenerationIndex
} = pokedexSlice.actions

export default pokedexSlice.reducer