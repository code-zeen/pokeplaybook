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
            query: () => `/cards/xy1-1`, // TODO find a way to search by id or randomize
            transformResponse: (response: { data: PokemonCard }) => {
                return response.data
            }
        }),
        getPokemonCardByPokedexNumber: builder.query<PokemonCard, number | null>({
            query: (pokedexNumber: number) => `/cards?q=nationalPokedexNumbers:${pokedexNumber}`,
            transformResponse: (response: { data: PokemonCard[] }) => {
                return response.data[0]
            }
        })
    }),
})

export const { useGetPokemonCardByIdQuery, useGetPokemonCardByPokedexNumberQuery } = pokemontcgapi