import { PokemonCard } from '@/features/pokemon-cards/interface/PokemonCard.ts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = import.meta.env.VITE_POKEMON_TCG_SECRET_API_KEY

export const pokemontcgapi = createApi({
    reducerPath: 'pokemontcgapi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.pokemontcg.io/v2/',
        prepareHeaders: headers => {
            headers.set('X-Api-Key', apiKey)
            return headers
        }
    }),
    endpoints: (builder) => ({
        getPokemonCardById: builder.query<PokemonCard, string>({
            query: (id: string) => `/cards/xy1-1`,
        })
    }),
})

export const { useGetPokemonCardByIdQuery } = pokemontcgapi