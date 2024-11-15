import { PokemonType } from "../types/pokemonType";
import Pokeball from "./Pokeball";
import PokeballContainer from "./PokeballContainer";

interface PokedexProps {
    pokemons: PokemonType[]
}

function Pokedex({ pokemons }: PokedexProps) {
    return (
        <div className="bg-black p-1">
            <div className="flex flex-col bg-gray-100">
                <div className="flex justify-center bg-red-500 py-1.5">
                    <h5 className="text-white">Pokedex</h5>
                </div>

                <div className="flex">
                    <div className="bg-red-500">
                        <PokeballContainer>
                            <Pokeball />
                        </PokeballContainer>
                    </div>
                    <ol>
                        {pokemons.map((pokemon, index) => (
                            <li key={index}>
                                <div className="flex gap-2">
                                    <span>{index + 1}</span>
                                    <span>{pokemon.name}</span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Pokedex