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
        <div className="flex flex-wrap gap-1 px-1 py-2">
            {pokemonCards?.map(card => (
                <div key={card.id}
                     className="border rounded-xl bg-white w-[calc(50%-0.125rem)] p-2">
                    <img src={card.images.small} alt={card.name}
                         className="object-contain" />
                    <div className="flex flex-col items-center">
                        <span className="font-bold">{card.name}</span>
                        <span className="text-xs bg-gray-300 px-1 border">{card.set.ptcgoCode} {card.number}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}