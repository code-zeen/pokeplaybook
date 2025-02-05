import questionPng from '/missing.png'
import { useGetPokedexEntryByNameOrIdQuery } from '@/features/pokedex/pokeapi.ts'

interface PokemonSubtypeProps {
    subtype: string
    evolvesFrom?: string
}

export default function PokemonSubtype({ subtype, evolvesFrom }: PokemonSubtypeProps) {
    const { data: pokemon, error, isLoading } = useGetPokedexEntryByNameOrIdQuery(evolvesFrom ?? '', {
        skip: !evolvesFrom,
    })

    return (
        <div className="relative flex">
            <div
                className="flex justify-center items-center px-1 shadow-[2px_1px_2px_rgba(0,0,0,0.25)] rounded-l-2xl rounded-tr-sm rounded-br-3xl bg-gradient-to-b from-gray-300 via-gray-100 to-gray-400">
            <span
                className="leading-none uppercase italic font-bold text-[10px] text-gray-500 py-0.5 pr-0.5">{subtype}</span>
            </div>

            {evolvesFrom && (
                <>
                    <div
                        className="absolute flex items-center w-10 h-10 top-full rounded-tl-xl rounded-br-xl rounded border-2 border-gray-400 bg-gradient-to-br from-gray-300 via-white to-gray-400 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)] p-1 ml-1">
                        {isLoading && <img src={questionPng} alt="loading" />}
                        {error && <img src={questionPng} alt="error" />}
                        {pokemon?.sprites?.front_default &&
                            <img
                                src={pokemon.sprites.front_default}
                                alt={evolvesFrom}
                                className="absolute inset-0 w-auto h-auto scale-150 object-cover"
                            />
                        }
                    </div>
                    <div
                        className="absolute flex top-[21px] left-11 w-32 border bg-gradient-to-tr from-gray-400 via-white to-gray-300 px-0.5 shadow-[2px_1px_2px_rgba(0,0,0,0.25)] ">
                        <span className="text-[8px] italic">Evolves from {evolvesFrom}</span>
                    </div>
                </>
            )}
        </div>
    )
}