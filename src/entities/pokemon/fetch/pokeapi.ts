import { generations } from "@/entities/pokemon/fetch/generationQuery.ts";

const baseUrl = 'https://pokeapi.co/api/v2'

/***** Pokemon Card *****/
export const fetchPokemonCardApiByNameOrId = async (nameOrId: string | number) => {
    const resPokemon = await fetch(`${baseUrl}/pokemon/${nameOrId}`)
    const dataPokemon = await resPokemon.json()

    const resAbility = await fetch(`${baseUrl}/ability/${dataPokemon?.abilities[0].ability.name}`)
    const dataAbility = await resAbility.json()

    const resMove = await fetch(`${baseUrl}/move/${dataPokemon?.moves[0].move.name}`)
    const dataMove = await resMove.json()

    return { baseData: dataPokemon, ability: dataAbility, move: dataMove }
}

/***** Pokedex *****/
export const fetchPokedexEntryApiByNameOrId = async (nameOrId: string | number) => {
    const res = await fetch(`${baseUrl}/pokemon/${nameOrId}`)
    return await res.json()
}

export const fetchPokedexListApiByGenerationIndex = async (index: number) => {
    const res = await fetch(`${baseUrl}/pokemon?offset=${generations[index].offset}&limit=${generations[index].limit}`)
    return await res.json()
}