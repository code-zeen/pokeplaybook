const baseUrl = 'https://pokeapi.co/api/v2'

/***** Pokemon Card *****/
export const fetchPokemonCard = async (nameOrId: string | number) => {
    const resPokemon = await fetch(`${baseUrl}/pokemon/${nameOrId}`)
    const dataPokemon = await resPokemon.json()

    const resAbility = await fetch(`${baseUrl}/ability/${dataPokemon?.abilities[0].ability.name}`)
    const dataAbility = await resAbility.json()

    const resMove = await fetch(`${baseUrl}/move/${dataPokemon?.moves[0].move.name}`)
    const dataMove = await resMove.json()

    return { baseData: dataPokemon, ability: dataAbility, move: dataMove }
}

/***** Pokedex *****/
export const fetchPokemon = async (nameOrId: string | number) => {
    const res = await fetch(`${baseUrl}/pokemon/${nameOrId}`)
    return await res.json()
}