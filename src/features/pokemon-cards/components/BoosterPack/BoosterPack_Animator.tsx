import BoosterPack from '@/features/pokemon-cards/components/BoosterPack/BoosterPack.tsx'
import PokemonCard from '@/features/pokemon-cards/components/PokemonCard.tsx'
import { useGetPokemonCardByPokedexNumberQuery } from '@/features/pokemon-cards/pokemontcgapi.ts'
import { LoaderCircle } from 'lucide-react'
import { useState } from 'react'

export default function BoosterPack_Animator() {
    const [ randomId, setRandomId ] = useState<number | null>(null)
    const [ isOpened, setIsOpened ] = useState(false)

    const { data: pokemonCard, isFetching } = useGetPokemonCardByPokedexNumberQuery(randomId, { skip: !randomId })

    const getRandomPokemonId = () => {
        return Math.floor(Math.random() * 1025) + 1
    }

    const handleClick = () => {
        setRandomId(getRandomPokemonId())
        setIsOpened(true)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-blue-800 italic opacity-70">"{pokemonCard?.flavorText}"</p>
            <div className="w-64 h-96 relative">
                <BoosterPack isOpened={isOpened} handleClick={handleClick} />
                {isFetching ? (
                    <div className="flex justify-center items-center h-full">
                        <LoaderCircle className="animate-spin" />
                    </div>
                ) : (
                    isOpened && pokemonCard && <PokemonCard pokemonCard={pokemonCard} />
                )}
            </div>
        </div>
    )
}