export const fetchPokemonByNameOrId = async (nameOrId: string | number) => {
    const resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
    const dataPokemon = await resPokemon.json()

    const resAbility = await fetch(`https://pokeapi.co/api/v2/ability/${dataPokemon?.abilities[0].ability.name}`)
    const dataAbility = await resAbility.json()

    const resMove = await fetch(`https://pokeapi.co/api/v2/move/${dataPokemon?.moves[0].move.name}`)
    const dataMove = await resMove.json()

    return { pokemon: dataPokemon, ability: dataAbility, move: dataMove }
}