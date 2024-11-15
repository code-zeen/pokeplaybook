import { spriteBgClass } from "./typeColorClasses";
import { TypeEnum } from "../../enum/pokemonEnum";

interface PokemonImageProps {
    src: string
    name: string
    type: TypeEnum
}

function PokemonImage({ src, name, type }: PokemonImageProps) {
    return (
        <div
            className={`flex justify-center mx-2 border border-white border-b-0 ${spriteBgClass[type]}`}>
            <img src={src} alt={name} />
        </div>
    )
}

export default PokemonImage