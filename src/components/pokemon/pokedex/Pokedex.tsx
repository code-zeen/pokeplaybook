import PokedexHeader from './PokedexHeader';
import PokedexList from './PokedexList';
import PokemonName from './PokemonName';
import ContainerWithSideBorder from './ContainerWithSideBorder';
import PokeballGrayBg from './PokeballGrayBg';
import { ExtendedPokemonType, PokedexInfo } from '../../../App';
import GenerationSelector from './GenerationSelector.tsx';

interface PokedexProps {
    pokemons: PokedexInfo[]
    pokemon: ExtendedPokemonType | null
    selectedGenerationIndex: number
    setSelectedGenerationIndex: (index: number) => void
    selectedPokemonName?: string
    setSelectedPokemonName: (name: string) => void
}

function Pokedex({
                     pokemons,
                     pokemon,
                     selectedGenerationIndex,
                     setSelectedGenerationIndex,
                     selectedPokemonName,
                     setSelectedPokemonName
                 }: PokedexProps) {

    return (
        <div className="h-96">
            <div className="flex flex-col bg-gray-100">
                <PokedexHeader />
                <div className="flex p-2 gap-2">
                    {pokemon && <div className="flex flex-col justify-between">
                        <PokemonName name={pokemon.name} />

                        <PokeballGrayBg id={pokemon.id} name={pokemon.name} />

                        <ContainerWithSideBorder>
                            <div className="w-full px-4">
                                <div className="flex justify-between">
                                    <span>Seen: </span>
                                    <span>{pokemon.seen}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Owned: </span>
                                    <span>{pokemon.owned}</span>
                                </div>
                            </div>
                        </ContainerWithSideBorder>
                    </div>
                    }
                    <div className="flex flex-col gap-1">
                        <GenerationSelector selectedGenerationIndex={selectedGenerationIndex}
                                            setSelectedGenerationIndex={setSelectedGenerationIndex} />
                        <PokedexList pokemons={pokemons} selectedPokemonName={selectedPokemonName}
                                     setSelectedPokemonName={setSelectedPokemonName} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokedex