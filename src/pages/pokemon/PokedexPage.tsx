import { PokemonType } from '@/entities/pokemon/types/pokemonType.ts'
import Pokedex from '@/features/pokedex/components/Pokedex.tsx'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'

import { KeyboardEvent, useEffect, useState } from 'react'
import {
    fetchPokedexEntryApiByNameOrId,
    fetchPokedexListApiByGenerationIndex
} from "@/entities/pokemon/fetch/pokeapi.ts";

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
    const [ searchInput, setSearchInput ] = useState<string>('')
    const [ pokemons, setPokemons ] = useState<PokedexInfo[]>([])
    const [ pokemon, setPokemon ] = useState<ExtendedPokemonType | null>(null)
    const [ selectedGenerationIndex, setSelectedGenerationIndex ] = useState<number>(0)
    const [ selectedPokemonName, setSelectedPokemonName ] = useState<string>()

    useEffect(() => {
        (async () => await getPokemonsByGeneration(selectedGenerationIndex))()
    }, [ selectedGenerationIndex ])

    useEffect(() => {
        if (selectedPokemonName) {
            (async () => {
                await getPokemonByNameOrId(selectedPokemonName)
            })()
        }
    }, [ selectedPokemonName ])


    const getPokemonsByGeneration = async (index: number) => {
        const data = await fetchPokedexListApiByGenerationIndex(index)

        setPokemons(data.results.map((pokemon: { name: string, url: string }) => ({
            ...pokemon,
            seen: SEEN,
            owned: OWNED,
        })))
    }

    const getPokemonByNameOrId = async (name: string | number) => {
        const data = await fetchPokedexEntryApiByNameOrId(name)

        setPokemon({
            ...data,
            seen: SEEN,
            owned: OWNED,
        })
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            setSelectedPokemonName(searchInput)
        }
    }

    const handleSearch = () => {
        if (searchInput) {
            setSelectedPokemonName(searchInput)
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center px-1 py-2 gap-2">
                <div className="flex w-full max-w-sm gap-1">
                    <Input
                        type="text"
                        name="pokemon"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <Button onClick={handleSearch}>Search</Button>
                </div>
                <Pokedex pokemons={pokemons} pokemon={pokemon} selectedGenerationIndex={selectedGenerationIndex}
                         setSelectedGenerationIndex={setSelectedGenerationIndex}
                         setSelectedPokemonName={setSelectedPokemonName} />
            </div>
        </div>
    )
}

export default PokedexPage