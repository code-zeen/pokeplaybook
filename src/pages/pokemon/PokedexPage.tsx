import { PokemonType } from '@/entities/pokemon/types/pokemonType.ts'
import Pokedex from '@/features/pokedex/components/Pokedex.tsx'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'

import { KeyboardEvent, useEffect, useState } from 'react'
import { useAppDispatch } from "@/app/store/hooks.ts";
import { fetchPokedexEntryByNameOrId, fetchPokedexListbyGenerationIndex } from "@/features/pokedex/pokedexSlice.ts";

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

function PokedexPage() {
    const [ searchInput, setSearchInput ] = useState<string>('')
    const [ selectedGenerationIndex ] = useState<number>(0)
    const [ selectedPokemonName, setSelectedPokemonName ] = useState<string>()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPokedexListbyGenerationIndex(selectedGenerationIndex))
    }, [ selectedGenerationIndex ])

    useEffect(() => {
        if (selectedPokemonName) {
            dispatch(fetchPokedexEntryByNameOrId(selectedPokemonName))
        }
    }, [ selectedPokemonName ])

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
                <Pokedex setSelectedPokemonName={setSelectedPokemonName} />
            </div>
        </div>
    )
}

export default PokedexPage