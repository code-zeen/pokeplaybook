import toastSlice from '@/entities/toast/toastSlice.ts'
import pokemonCardsSlice from '@/features/pokemon-cards/pokemonCardsSlice.ts'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        pokemonCards: pokemonCardsSlice,
        toast: toastSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch