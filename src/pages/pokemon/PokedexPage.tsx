import Pokedex from '@/features/pokemon/pokedex/components/Pokedex.tsx'
import { generations } from '@/features/pokemon/pokedex/generationQuery.ts'
import { PokemonType } from '@/features/pokemon/types/pokemonType.ts'
import { Button } from '@/shared/ui/button.tsx'
import { Input } from '@/shared/ui/input.tsx'
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
    const [ searchInput, setSearchInput ] = useState<string>('')
    const [ pokemons, setPokemons ] = useState<PokedexInfo[]>([])
    const [ pokemon, setPokemon ] = useState<ExtendedPokemonType | null>(null)
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

        setPokemon({
            ...dataPokemon,
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