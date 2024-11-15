import { useEffect, useState } from 'react'
import { FlavorTextEntryType, PokemonType, StatType } from './types/pokemonType.ts'
import PokemonName from './PokemonName.tsx'
import PokemonHp from './PokemonHp.tsx'
import { StatNameEnum } from '../../enum/pokemonEnum.ts'
import PokemonAbility from './PokemonAbility.tsx'
import PokemonImage from './PokemonImage.tsx'
import PokemonPhysicalInfo from "./PokemonPhysicalInfo.tsx";
import PokemonMove from "./PokemonMove.tsx";
import { AbilityType } from "./types/abilityType.ts";
import { MoveType } from "./types/moveType.ts";
import { cardBgClass } from "./typeColorClasses";

function PokemonCard() {
    const [ pokemon, setPokemon ] = useState<PokemonType>()
    const [ ability, setAbility ] = useState<AbilityType>()
    const [ move, setMove ] = useState<MoveType>()
    useEffect(() => {
        (async () => {
            await fetchPokemonByNameOrId('mewtwo')
        })()
    }, [])

    const fetchPokemonByNameOrId = async (name: string | number) => {
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

    const findStat = (stats: StatType[], name: StatNameEnum): StatType => {
        return stats.find(each => each.stat.name === name)!
    }

    const findEnglishFlavorText = (flavorTextEntries: FlavorTextEntryType[]) => {
        return flavorTextEntries.find(each => each.language.name === 'en')!
    }

    if (!pokemon || !ability || !move) return null

    const type = pokemon.types[0].type.name

    return (
        <div className="p-2 bg-gray-300 w-72 h-96 border rounded">
            <div className={`flex flex-col ${cardBgClass[type]} h-full border rounded-lg`}>
                <div className="flex justify-between px-2 py-0.5">
                    <PokemonName name={pokemon.name} />
                    <PokemonHp hp={findStat(pokemon.stats, StatNameEnum.HP).base_stat}
                               type={pokemon.types[0].type.name} />
                </div>
                <PokemonImage src={pokemon.sprites.front_default ?? ''} name={pokemon.name} type={type} />
                <PokemonPhysicalInfo number={pokemon.id} height={pokemon.height} weight={pokemon.weight} />
                <div className="flex flex-col justify-around h-full p-2">
                    <PokemonAbility name={ability.name}
                                    flavorText={findEnglishFlavorText(ability.flavor_text_entries).flavor_text} />
                    <PokemonMove name={move.name} power={move.power} type={move.type.name}
                                 flavorText={findEnglishFlavorText(move.flavor_text_entries).flavor_text} />
                </div>
                <div className="flex gap-0.5 m-1 px-1 justify-between text-xs border border-r-0 border-l-0">
                    <span>weakness</span>
                    <span>retreat</span>
                </div>
                <div className="flex gap-0.5 p-1">
                    <div className="flex border rounded bg-white text-xs px-0.5">G</div>
                    <div className="flex border rounded bg-black text-xs text-white px-0.5">sv2a</div>
                    <div className="flex text-white text-xs">{pokemon.id}/1125 AR</div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard