import ContainerWithSideBorder from '@/components/pokemon/pokedex/ContainerWithSideBorder.tsx'
import PokeballGrayBg from '@/components/pokemon/pokedex/PokeballGrayBg.tsx'
import PokemonCryButton from '@/components/pokemon/pokedex/PokemonCryButton.tsx'
import PokemonName from '@/components/pokemon/pokedex/PokemonName.tsx'
import TypeIcon from '@/components/pokemon/TypeIcon.tsx'
import { ExtendedPokemonType } from '@/pages/pokemon/PokedexPage.tsx'

interface PokemonViewProps {
    pokemon: ExtendedPokemonType | null
}

function PokemonView({ pokemon }: PokemonViewProps) {
    return (
        <div className="flex flex-col justify-between">
            <PokemonName name={pokemon?.name || '-'} />
            <div className="flex py-1">
                <div className="w-3/12">
                    <PokemonCryButton pokemonId={pokemon?.id} />
                </div>
                <div className="w-6/12 relative p-20 border">
                    <PokeballGrayBg id={pokemon?.id || 0} name={pokemon?.name || ''} />
                </div>
                <div className="flex flex-col w-3/12 items-end gap-1">
                    {pokemon?.types.map((type, index) => (
                        <TypeIcon key={index} type={type.type.name} variant="sv" />
                    ))}
                </div>
            </div>


            <div className="flex justify-between">
                <ContainerWithSideBorder>
                    <div className="px-3 w-32">
                        <div className="flex justify-between">
                            <span>Seen: </span>
                            <span>{pokemon?.seen || '-'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Owned: </span>
                            <span>{pokemon?.owned || '-'}</span>
                        </div>

                    </div>
                </ContainerWithSideBorder>
            </div>
        </div>
    )
}

export default PokemonView