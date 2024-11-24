import { useAppDispatch, useAppSelector } from '@/app/store/hooks.ts'
import PokemonCard from '@/features/pokemon-cards/components/PokemonCard.tsx'
import { fetchPokemonCardByNameOrId } from '@/features/pokemon-cards/pokemonCardsSlice.ts'
import { PokemonCardType } from '@/features/pokemon-cards/types/pokemonCardType.ts'
import { Button } from '@/shared/ui/button.tsx'
import { LoaderCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

function PokemonCardPage() {
    const [ randomId, setRandomId ] = useState<number | null>(null)
    const dispatch = useAppDispatch()
    const { pokemonCards, isLoading } = useAppSelector(state => state.pokemonCards)

    useEffect(() => {
        if (randomId) {
            dispatch(fetchPokemonCardByNameOrId(randomId))
        }
    }, [ randomId, dispatch ])

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
                    {pokemonCards.map((pokemon: PokemonCardType, index: number) => (
                        <PokemonCard key={index} pokemon={pokemon} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokemonCardPage