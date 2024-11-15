import { PokemonType } from "../types/pokemonType";
import PokedexHeader from "./PokedexHeader";
import PokedexList from "./PokedexList";
import PokemonName from "./PokemonName";
import ContainerWithSideBorder from "./ContainerWithSideBorder";
import PokeballGrayBg from "./PokeballGrayBg";

interface PokedexProps {
    pokemons: PokemonType[]
}

function Pokedex({ pokemons }: PokedexProps) {
    return (
        <div className="h-96">
            <div className="flex flex-col bg-gray-100">
                <PokedexHeader />
                <div className="flex p-2 gap-2">
                    <div className="flex flex-col justify-between">
                        <PokemonName />

                        <PokeballGrayBg />

                        <ContainerWithSideBorder>
                            <div className="w-full px-4">
                                <div className="flex justify-between">
                                    <span>Seen: </span>
                                    <span>11</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Owned: </span>
                                    <span>4</span>
                                </div>
                            </div>
                        </ContainerWithSideBorder>
                    </div>
                    <PokedexList pokemons={pokemons} />


                </div>
            </div>
        </div>
    )
}

export default Pokedex