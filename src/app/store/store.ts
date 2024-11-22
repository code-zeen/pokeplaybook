import pokemonCardsSlice from '@/features/pokemon-cards/pokemonCardsSlice.ts'
import { configureStore } from '@reduxjs/toolkit'
import { Reducer } from 'redux'

const store = configureStore({
    reducer: {
        pokemonCards: pokemonCardsSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch