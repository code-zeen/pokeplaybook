import ContainerWithSideBorder from '@/components/pokemon/pokedex/ContainerWithSideBorder.tsx'
import PokeballGrayBg from '@/components/pokemon/pokedex/PokeballGrayBg.tsx'
import PokemonName from '@/components/pokemon/pokedex/PokemonName.tsx'
import { ExtendedPokemonType } from '@/pages/pokemon/PokedexPage.tsx'

interface PokemonViewProps {
    pokemon: ExtendedPokemonType | null
}

function PokemonView({ pokemon }: PokemonViewProps) {
    return (
        <div className="flex flex-col justify-between">
            <PokemonName name={pokemon?.name || '-'} />

            <PokeballGrayBg id={pokemon?.id || 0} name={pokemon?.name || ''} />

            <ContainerWithSideBorder>
                <div className="w-full px-4">
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
    )
}

export default PokemonView