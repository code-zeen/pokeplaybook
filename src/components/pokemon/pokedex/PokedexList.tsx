import PokeballContainer from "./PokeballContainer";
import Pokeball from "./Pokeball";
import { PokemonType } from "../types/pokemonType";

interface PokedexListProps {
    pokemons: PokemonType[]
    setSelectedPokemonId: (id: number) => void
}

function PokedexList({ pokemons, setSelectedPokemonId }: PokedexListProps) {
    const handleClick = (id: number) => {
        setSelectedPokemonId(id)
    }

    return (
        <div className="flex border-2 rounded overflow-auto bg-white border-black w-56 h-96">
            <ol className="w-full">
                {pokemons.map((pokemon, index) => (
                    <li key={index}>
                        <div className="flex gap-1 hover:bg-gray-100 cursor-pointer"
                             onClick={() => handleClick(index + 1)}>
                            <div className="bg-red-500 p-1">
                                <PokeballContainer>
                                    <Pokeball />
                                </PokeballContainer>
                            </div>
                            <div className="flex gap-3 p-1 pr-4">
                                <span className="font-mono w-6 text-right">{index + 1}</span>
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