import PokeballContainer from './PokeballContainer';
import Pokeball from './Pokeball';
import { PokedexInfo } from '../../../App';

interface PokedexListProps {
    pokemons: PokedexInfo[]
    selectedPokemonName?: string
    setSelectedPokemonName: (name: string) => void
}

function PokedexList({ pokemons, selectedPokemonName, setSelectedPokemonName }: PokedexListProps) {
    const handleClick = (name: string) => {
        setSelectedPokemonName(name)
    }

    return (
        <div className="flex border-2 rounded overflow-auto bg-white border-black min-w-56 h-96">
            <ol className="w-full">
                {pokemons.map((pokemon, index) => (
                    <li key={index}>
                        <div
                            className={`flex gap-1 hover:bg-rose-100 active:bg-rose-200 cursor-pointer ${selectedPokemonName === pokemon.name ? 'bg-rose-200' : ''}`}
                            onClick={() => handleClick(pokemon.name)}>
                            <div className="flex justify-center items-center bg-red-500 w-8 h-8">
                                {pokemon.seen > 0 &&
                                    <PokeballContainer>
                                        {pokemon.owned > 0 &&
                                            <Pokeball />
                                        }
                                    </PokeballContainer>
                                }
                            </div>
                            <div className="flex gap-3 p-1 pr-4">
                                <span
                                    className="font-mono w-10 text-right">{pokemon.url.match(/\/(\d+)\/$/)?.[1]}</span>
                                <span className="capitalize">{pokemon.name}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default PokedexList