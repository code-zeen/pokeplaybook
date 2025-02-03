import { generations } from '@/entities/pokemon/fetch/generationQuery.ts'
import { ExtendedPokemonType, PokedexInfo } from '@/pages/pokemon/PokedexPage.tsx'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokeapi = createApi({
    reducerPath: 'pokeapi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokedexListByGenerationIndex: builder.query<PokedexInfo[], number>({
            query: (index: number) => `/pokemon?offset=${generations[index].offset}&limit=${generations[index].limit}`,
            transformResponse: (response: { results: { name: string; url: string }[] }) => {
                return response.results.map((pokemon) => ({
                    ...pokemon,
                    seen: 5,
                    owned: 2,
                }))
            },
        }),
        getPokedexEntryByNameOrId: builder.query<ExtendedPokemonType, string | number>({
            query: (nameOrId: string | number) => `/pokemon/${nameOrId}`,
            transformResponse: (response: ExtendedPokemonType) => {
                return { ...response, seen: 5, owned: 2, }
            }
        })
    }),
})

export const { useGetPokedexListByGenerationIndexQuery, useGetPokedexEntryByNameOrIdQuery, } = pokeapi