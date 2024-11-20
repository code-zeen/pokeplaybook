import { generations } from '@/components/pokemon/pokedex/generationQuery.ts'
import Pokedex from '@/components/pokemon/pokedex/Pokedex.tsx'
import { AbilityType } from '@/components/pokemon/types/abilityType.ts'
import { MoveType } from '@/components/pokemon/types/moveType.ts'
import { PokemonType } from '@/components/pokemon/types/pokemonType.ts'
import { KeyboardEvent, useEffect, useState } from 'react'

export interface PokedexInfo {
    name: string
    url: string
    seen: number
    owned: number
}

export interface ExtendedPokemonType extends PokemonType {
    seen: number
    owned: number
}

const SEEN = 10
const OWNED = 10

function PokedexPage() {
    const [ pokemons, setPokemons ] = useState<PokedexInfo[]>([])
    const [ pokemon, setPokemon ] = useState<ExtendedPokemonType | null>(null)
    const [ ability, setAbility ] = useState<AbilityType>()
    const [ move, setMove ] = useState<MoveType>()
    const [ selectedGenerationIndex, setSelectedGenerationIndex ] = useState<number>(0)
    const [ selectedPokemonName, setSelectedPokemonName ] = useState<string>()

    useEffect(() => {
        (async () => await fetchPokemonsByGeneration(selectedGenerationIndex))()
    }, [ selectedGenerationIndex ])

    useEffect(() => {
        if (selectedPokemonName) {
            (async () => {
                await fetchPokemonByNameOrId(selectedPokemonName)
            })()
        }
    }, [ selectedPokemonName ])


    const fetchPokemonsByGeneration = async (index: number) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${generations[index].offset}&limit=${generations[index].limit}`)
        const data = await res.json()

        setPokemons(data.results.map((pokemon: { name: string, url: string }) => ({
            ...pokemon,
            seen: SEEN,
            owned: OWNED,
        })))
    }

    const fetchPokemonByNameOrId = async (name: string | number) => {
        const resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const dataPokemon = await resPokemon.json()

        const resAbility = await fetch(`https://pokeapi.co/api/v2/ability/${dataPokemon?.abilities[0].ability.name}`)
        const dataAbility = await resAbility.json()

        const resMove = await fetch(`https://pokeapi.co/api/v2/move/${dataPokemon?.moves[0].move.name}`)
        const dataMove = await resMove.json()

        setPokemon({
            ...dataPokemon,
            seen: SEEN,
            owned: OWNED,
        })
        setAbility(dataAbility)
        setMove(dataMove)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            setSelectedPokemonName(e.currentTarget.value)
        }
    }

    return (
        <Pokedex pokemons={pokemons} pokemon={pokemon} selectedGenerationIndex={selectedGenerationIndex}
                 setSelectedGenerationIndex={setSelectedGenerationIndex}
                 setSelectedPokemonName={setSelectedPokemonName} />
    )
}

export default PokedexPage