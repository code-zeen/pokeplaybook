import { pokeApi } from '@/features/pokedex/pokeApi.ts'
import pokedexSlice from '@/features/pokedex/pokeSlice.ts'
import { pokemontcgapi } from '@/features/pokemon-cards/pokemontcgapi.ts'
import pokemonCardsSlice from '@/features/pokemon-cards/pokemontcgSlice.ts'
import toastSlice from '@/features/toast/toastSlice.ts'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        [pokeApi.reducerPath]: pokeApi.reducer,
        [pokemontcgapi.reducerPath]: pokemontcgapi.reducer,
        pokedex: pokedexSlice,
        pokemonCards: pokemonCardsSlice,
        toast: toastSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    })
        .concat(pokeApi.middleware)
        .concat(pokemontcgapi.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>