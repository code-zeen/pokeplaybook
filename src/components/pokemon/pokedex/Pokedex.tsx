import { PokemonType } from "../types/pokemonType";
import PokedexHeader from "./PokedexHeader";
import PokedexList from "./PokedexList";
import PokemonName from "./PokemonName";
import ContainerWithSideBorder from "./ContainerWithSideBorder";

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

                        <div className="flex flex-col justify-center items-center">
                            <div
                                className="w-48 h-24 border-8 border-gray-100 bg-gray-300 rounded-t-full transform"
                                style={{ transform: 'translateY(1px)' }}>
                            </div>
                            <div
                                className="w-48 h-24 border-8 border-gray-100 bg-gray-200 rounded-b-full transform"
                                style={{ transform: 'translateY(-1px)' }}>
                            </div>
                            <div className="bg-gray-100 w-24 h-24 rounded-full absolute"></div>
                            <div className="bg-gray-200 w-16 h-16 rounded-full absolute"></div>
                        </div>


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