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
                            <p>seen: 11</p>
                            <p>owned: 2</p>
                        </ContainerWithSideBorder>
                    </div>
                    <PokedexList pokemons={pokemons} />


                </div>
            </div>
        </div>
    )
}

export default Pokedex