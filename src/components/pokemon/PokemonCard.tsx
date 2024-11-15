import { useEffect, useState } from 'react'
import type { AbilityType, PokemonType } from './pokemonType.ts'

function PokemonCard() {
  const [pokemon, setPokemon] = useState<PokemonType>()
  const [ability, setAbility] = useState<AbilityType>()
  useEffect(() => {
    (async () => {
      await fetchPokemonByName('ditto')
    })()
  }, [])

  const fetchPokemonByName = async (name: string) => {
    const resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const dataPokemon = await resPokemon.json()

    const resAbility = await fetch(`https://pokeapi.co/api/v2/ability/${dataPokemon?.abilities[0].ability.name}`)
    const dataAbility = await resAbility.json()

    setPokemon(dataPokemon)
    setAbility(dataAbility)
  }

  if (!pokemon || !ability) return null

  return (
    <div className="p-2 bg-yellow-200 w-72 border rounded">
      <div className="flex flex-col bg-gray-100 rounded-lg">
        <div className="flex justify-between">
        <span>{pokemon.name}</span>
        <span>HP {pokemon.stats.find(each => each.stat.name === 'hp')?.base_stat}</span>
        </div>
        <div className="flex justify-center border">
          <img src={pokemon.sprites.front_default} alt={pokemon?.name} />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <span>Ability</span>
            <span>{ability.name}</span>
          </div>

          {ability.flavor_text_entries.find(each => each.language.name === 'en')?.flavor_text}
        </div>
      </div>
    </div>
  )
}

export default PokemonCard