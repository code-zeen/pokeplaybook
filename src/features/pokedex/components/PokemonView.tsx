import { useAppSelector } from '@/app/store/hooks.ts'
import ContainerWithSideBorder from '@/features/pokedex/components/ContainerWithSideBorder.tsx'
import PokeballGrayBg from '@/features/pokedex/components/PokeballGrayBg.tsx'
import PokemonCryButton from '@/features/pokedex/components/PokemonCryButton.tsx'
import PokemonName from '@/features/pokedex/components/PokemonName.tsx'
import { useGetPokedexEntryByNameOrIdQuery } from '@/features/pokedex/pokeApi.ts'
import TypeIcon from '@/shared/components/TypeIcon.tsx'

function PokemonView() {
    const { searchKeyword } = useAppSelector(state => state.poke)
    const { data: pokemon, error, isLoading } = useGetPokedexEntryByNameOrIdQuery(searchKeyword)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error occurred</div>
    if (!pokemon) return <div>No Pokémon found</div>

    return (
        <div className="flex flex-col justify-between">
            <PokemonName name={pokemon.name || '-'} />
            <div className="flex py-1">
                <div className="w-3/12">
                    <PokemonCryButton pokemonId={pokemon.id} />
                </div>
                <div className="w-6/12">
                    <PokeballGrayBg id={pokemon.id || 0} name={pokemon.name || ''} />
                </div>
                <div className="flex flex-col w-3/12 items-end gap-1">
                    {pokemon.types?.map((type, index) => (
                        <TypeIcon key={index} type={type.type.name} height="16px" />
                    ))}
                </div>
            </div>

            <div className="flex justify-between">
                <ContainerWithSideBorder>
                    <div className="px-3 w-32">
                        <div className="flex justify-between">
                            <span>Seen: </span>
                            <span>{pokemon.seen || '-'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Owned: </span>
                            <span>{pokemon.owned || '-'}</span>
                        </div>

                    </div>
                </ContainerWithSideBorder>
            </div>
        </div>
    )
}

export default PokemonView