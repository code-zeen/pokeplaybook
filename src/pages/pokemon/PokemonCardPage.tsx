import PokemonCard from '@/components/pokemon/pokemon-card/PokemonCard.tsx'
import { AbilityType } from '@/components/pokemon/types/abilityType.ts'
import { MoveType } from '@/components/pokemon/types/moveType.ts'
import usePokemon, { ExtendedPokemonType } from '@/components/pokemon/usePokemon.ts'
import { Button } from '@/components/ui/button.tsx'
import { useState } from 'react'

interface PokemonHistoryType {
    pokemon: ExtendedPokemonType
    ability: AbilityType
    move: MoveType
}

function PokemonCardPage() {
    const [ randomId, setRandomId ] = useState<number | null>(null)
    const [ pokemonHistory, setPokemonHistory ] = useState<PokemonHistoryType[]>([])
    const { pokemon, ability, move } = usePokemon(randomId)

    const getRandomPokemonId = () => {
        return Math.floor(Math.random() * 1025) + 1
    }
    const handleClick = () => {
        const pokemonId = getRandomPokemonId()
        setRandomId(pokemonId)

        if (pokemon && ability && move) {
            setPokemonHistory(prev => ([
                ...prev,
                { pokemon, ability, move, seen: 3, owned: 1, },
            ]))
        }
    }

    return (
        <div className="flex flex-col items-center p-4 gap-4">
            <Button variant="secondary" onClick={handleClick}>Pull!</Button>
            {pokemon && ability && move && (
                <PokemonCard pokemon={pokemon} ability={ability} move={move} />
            )}
            {pokemonHistory.length > 0 && (
                <div className="flex flex-wrap gap-1">
                    {pokemonHistory.map((each) => (
                        <PokemonCard pokemon={each.pokemon} ability={each.ability} move={each.move} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default PokemonCardPage