import { useAppSelector } from '@/app/store/hooks.ts'
import { useGetPokemonCardsBySearchQuery } from '@/features/pokemon-cards/pokemontcgapi.ts'
import { LoaderCircle } from 'lucide-react'

export default function Cardmarket() {
    const { searchKeyword } = useAppSelector(state => state.pokemontcg)
    const { data: pokemonCards, isFetching } = useGetPokemonCardsBySearchQuery(searchKeyword, { skip: !searchKeyword })

    if (isFetching) {
        return <LoaderCircle className="animate-spin" />
    }

    return (
        <div className="flex justify-center items-center flex-wrap overflow-y-auto h-full gap-2 px-1 py-2">
            {pokemonCards?.map(card => (
                <img key={card.id} src={card.images.small} alt={card.name}
                     className="max-h-[240px] h-auto w-auto object-contain" />
            ))}
        </div>
    )
}