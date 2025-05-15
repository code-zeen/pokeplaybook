import { createSlice } from '@reduxjs/toolkit'

interface PokeSliceType {
    searchKeyword: string
    generationIndex: number
}

const initialState: PokeSliceType = {
    searchKeyword: '',
    generationIndex: 0,
}

const pokeSlice = createSlice({
    name: 'poke',
    initialState,
    reducers: {
        setSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload
        },
        setGenerationIndex: (state, action) => {
            state.generationIndex = action.payload
        },
    },
})

export const {
    setSearchKeyword,
    setGenerationIndex,
} = pokeSlice.actions

export default pokeSlice.reducer