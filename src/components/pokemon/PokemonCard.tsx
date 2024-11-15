import { useEffect, useState } from 'react'
import type { AbilityType, MoveType, PokemonType, StatType } from './types/pokemonType.ts'
import PokemonName from './PokemonName.tsx'
import PokemonHp from './PokemonHp.tsx'
import { StatNameEnum } from '../../enum/pokemonEnum.ts'
import PokemonAbility from './PokemonAbility.tsx'
import PokemonImage from './PokemonImage.tsx'
import PokemonPhysicalInfo from "./PokemonPhysicalInfo.tsx";
import PokemonMove from "./PokemonMove.tsx";

function PokemonCard() {
  const [pokemon, setPokemon] = useState<PokemonType>()
  const [ability, setAbility] = useState<AbilityType>()
  const [move, setMove] = useState<MoveType>()
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

    const resMove = await fetch(`https://pokeapi.co/api/v2/move/${dataPokemon?.moves[0].move.name}`)
    const dataMove = await resMove.json()

    setPokemon(dataPokemon)
    setAbility(dataAbility)
    setMove(dataMove)
  }

  const findStat = (stats: StatType[], name: StatNameEnum): StatType =>  {
    return stats.find(each => each.stat.name === name)!
  }

  const findEnglishFlavorText = (flavorTextEntries) => {
    return flavorTextEntries.find(each => each.language.name === 'en')!
  }

  if (!pokemon || !ability || !move) return null

  return (
    <div className="p-2 bg-yellow-200 w-72 h-96 border rounded">
      <div className="flex flex-col bg-gray-100 h-full rounded-lg">
        <div className="flex justify-between">
          <PokemonName name={pokemon.name} />
          <PokemonHp hp={findStat(pokemon.stats, StatNameEnum.HP).base_stat} />
        </div>
        <PokemonImage src={pokemon.sprites.front_default ?? ''} name={pokemon.name} />
        <PokemonPhysicalInfo number={pokemon.id} height={pokemon.height} weight={pokemon.weight} />
        <div className="flex flex-col justify-around h-full p-2">
          <PokemonAbility name={ability.name} flavorText={findEnglishFlavorText(ability.flavor_text_entries).flavor_text} />
          <PokemonMove name={move.name} power={move.power} flavorText={findEnglishFlavorText(move.flavor_text_entries).flavor_text} />
        </div>
      </div>
    </div>
  )
}

export default PokemonCard