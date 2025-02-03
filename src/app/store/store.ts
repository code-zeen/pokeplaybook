import toastSlice from '@/entities/toast/toastSlice.ts'
import { pokeapi } from '@/features/pokedex/pokeapi.ts'
import pokedexSlice from '@/features/pokedex/pokedexSlice.ts'
import pokemonCardsSlice from '@/features/pokemon-cards/pokemonCardsSlice.ts'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        [pokeapi.reducerPath]: pokeapi.reducer,
        pokedex: pokedexSlice,
        pokemonCards: pokemonCardsSlice,
        toast: toastSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(pokeapi.middleware)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>