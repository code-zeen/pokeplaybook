import { generations } from '@/features/pokedex/config/generationQuery.ts'
import { ExtendedPokedexEntry, ExtendedPokedexItem } from '@/pages/pokemon/PokedexPage.tsx'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokeApi = createApi({
    reducerPath: 'pokeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokedexListByGenerationIndex: builder.query<ExtendedPokedexItem[], number>({
            query: (index: number) => `/pokemon?offset=${generations[index].offset}&limit=${generations[index].limit}`,
            transformResponse: (response: { results: { name: string; url: string }[] }) => {
                return response.results.map((pokemon) => ({
                    ...pokemon,
                    seen: 5,
                    owned: 2,
                }))
            },
        }),
        getPokedexEntryByNameOrId: builder.query<ExtendedPokedexEntry, string | number>({
            query: (nameOrId: string | number | undefined) => `/pokemon/${nameOrId}`,
            transformResponse: (response: ExtendedPokedexEntry) => {
                return { ...response, seen: 5, owned: 2 }
            },
        }),
    }),
})

export const { useGetPokedexListByGenerationIndexQuery, useGetPokedexEntryByNameOrIdQuery } = pokeApi