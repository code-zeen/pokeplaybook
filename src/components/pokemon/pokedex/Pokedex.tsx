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

                    <ol>
                        {pokemons.map((pokemon, index) => (
                            <li key={index}>

                                <div className="flex gap-1">
                                    <div className="bg-red-500 p-1">
                                        <PokeballContainer>
                                            <Pokeball />
                                        </PokeballContainer>
                                    </div>
                                    <div className="flex gap-3 p-1">
                                        <span className="font-mono w-6 text-right">{index + 1}</span>
                                        <span className="capitalize">{pokemon.name}</span>
                                    </div>
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