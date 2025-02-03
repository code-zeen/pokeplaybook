import { pokeapi } from '@/features/pokedex/pokeapi.ts'
import pokedexSlice from '@/features/pokedex/pokedexSlice.ts'
import pokemonCardsSlice from '@/features/pokemon-cards/pokemonCardsSlice.ts'
import { pokemontcgapi } from '@/features/pokemon-cards/pokemontcgapi.ts'
import toastSlice from '@/features/toast/toastSlice.ts'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        [pokeapi.reducerPath]: pokeapi.reducer,
        [pokemontcgapi.reducerPath]: pokemontcgapi.reducer,
        pokedex: pokedexSlice,
        pokemonCards: pokemonCardsSlice,
        toast: toastSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    })
        .concat(pokeapi.middleware)
        .concat(pokemontcgapi.middleware)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>