import { useAppDispatch, useAppSelector } from '@/app/store/hooks.ts'
import PokemonBoosterAnimator from '@/features/pokemon-cards/components/booster/PokemonBoosterAnimator.tsx'
import PokemonCard from '@/features/pokemon-cards/components/PokemonCard.tsx'
import { PokemonCard as IPokemonCard } from '@/features/pokemon-cards/interface/PokemonCard.ts'
import { addPokemonCard } from '@/features/pokemon-cards/pokemonCardsSlice.ts'
import { useGetPokemonCardByPokedexNumberQuery } from '@/features/pokemon-cards/pokemontcgapi.ts'
import { Button } from '@/shared/ui/button.tsx'
import { LoaderCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

function PokemonCardPage() {
    const [ randomId, setRandomId ] = useState<number | null>(null)
    const { pokemonCards } = useAppSelector(state => state.pokemonCards)
    const dispatch = useAppDispatch()

    // const { data: pokemonCard, isLoading } = useGetPokemonCardByIdQuery('test')
    const { data: pokemonCard, isFetching } = useGetPokemonCardByPokedexNumberQuery(randomId, { skip: !randomId })

    const getRandomPokemonId = () => {
        return Math.floor(Math.random() * 1025) + 1
    }
    const handleClick = () => {
        setRandomId(getRandomPokemonId())
    }

    useEffect(() => {
        if (pokemonCard) {
            dispatch(addPokemonCard(pokemonCard))
        }
    }, [ dispatch, pokemonCard ])

    return (
        <div className="flex flex-col items-center p-4 gap-4">
            <Button variant="default" onClick={handleClick} disabled={isFetching}>
                {isFetching ? (
                    <>
                        <LoaderCircle className="animate-spin" />
                        Pulling...
                    </>
                ) : (
                    'Pull!'
                )}
            </Button>

            <p className="text-blue-800 italic opacity-70">"{pokemonCard?.flavorText}"</p>

            <PokemonBoosterAnimator />

            <div className="flex w-full h-full">
                <div className="relative flex justify-center items-center border-red-500 h-[500px] w-full">
                    {pokemonCards.map((pokemonCard: IPokemonCard, index: number) => (
                        <PokemonCard key={index} pokemonCard={pokemonCard} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokemonCardPage