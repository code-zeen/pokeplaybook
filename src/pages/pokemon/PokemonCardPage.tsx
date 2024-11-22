import PokemonCard from '@/features/pokemon-cards/components/PokemonCard.tsx'
import usePokemonCards from '@/features/pokemon-cards/hooks/usePokemonCards.ts'
import { Button } from '@/shared/ui/button.tsx'
import { LoaderCircle } from 'lucide-react'
import { useState } from 'react'

function PokemonCardPage() {
    const [ randomId, setRandomId ] = useState<number | null>(null)
    const { pokemonCards, isLoading } = usePokemonCards(randomId)

    const getRandomPokemonId = () => {
        return Math.floor(Math.random() * 1025) + 1
    }
    const handleClick = () => {
        const pokemonId = getRandomPokemonId()
        setRandomId(pokemonId)
    }

    return (
        <div className="flex flex-col items-center p-4 gap-4">
            <Button variant="secondary" onClick={handleClick} disabled={isLoading}>
                {isLoading ? (
                    <>
                        <LoaderCircle className="animate-spin" />
                        Pulling...
                    </>
                ) : (
                    'Pull!'
                )}
            </Button>
            <div className="flex w-full">
                <div className="relative flex justify-center items-center border-red-500 h-[600px] w-full">
                    {pokemonCards.map((pokemon, index) => (
                        <PokemonCard pokemon={pokemon} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokemonCardPage