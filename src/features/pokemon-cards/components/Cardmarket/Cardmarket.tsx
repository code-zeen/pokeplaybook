import { useAppSelector } from '@/app/store/hooks.ts'
import { useGetPokemonCardsBySearchQuery } from '@/features/pokemon-cards/pokemontcgapi.ts'
import { LoaderCircle } from 'lucide-react'

export default function Cardmarket() {
    const { searchKeyword } = useAppSelector(state => state.pokemontcg)
    const { data: pokemonCards, isFetching } = useGetPokemonCardsBySearchQuery(searchKeyword, { skip: !searchKeyword })

    if (isFetching) {
        return (
            <div className="flex justify-center items-center w-full h-full">
                <LoaderCircle className="animate-spin" />
            </div>
        )
    }

    return (
        <div className="flex flex-wrap gap-1 px-1 py-2 max-w-7xl mx-auto">
            {pokemonCards?.map(card => (
                <div
                    key={card.id}
                    className="relative flex flex-col border border-gray-100 rounded-md bg-gray-50  p-2
                        w-[calc(50%-0.125rem)]
                        sm:w-[calc(33.333%-0.167rem)]
                        md:w-[calc(25%-0.1875rem)]
                        lg:w-[calc(20%-0.2rem)]"
                >
                    {card.cardmarket && (
                        <span
                            className="absolute right-1 top-1 bg-red-600 border border-white rounded px-1 text-sm md:text-sm text-white">
                            {card.cardmarket.prices.averageSellPrice.toString().replace('.', ',')}€
                        </span>
                    )}
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