import PokemonCard from '@/components/pokemon/pokemon-card/PokemonCard.tsx'
import usePokemon from '@/components/pokemon/usePokemon.ts'
import { Button } from '@/components/ui/button.tsx'
import { useState } from 'react'

function PokemonCardPage() {
    const [ randomId, setRandomId ] = useState<number | null>(null)
    const { pokemon, ability, move } = usePokemon(randomId)

    const getRandomPokemonId = () => {
        return Math.floor(Math.random() * 1025) + 1
    }
    const handleClick = () => {
        const pokemonId = getRandomPokemonId()
        setRandomId(pokemonId)
    }

    return (
        <div className="flex flex-col items-center p-4 gap-4">
            <Button variant="secondary" onClick={handleClick}>Pull!</Button>
            {pokemon && ability && move && (
                <PokemonCard pokemon={pokemon} ability={ability} move={move} />
            )}
        </div>
    )
}

export default PokemonCardPage