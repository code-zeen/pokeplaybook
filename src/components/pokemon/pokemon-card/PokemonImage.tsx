import { spriteBgClass } from "../typeColorClasses";
import { TypeEnum } from "../../../enum/pokemonEnum";
import { getSprite } from '../getSprite'

interface PokemonImageProps {
    src: string
    name: string
    type: TypeEnum
}

function PokemonImage({ src, name, type }: PokemonImageProps) {

    const sprite = getSprite(29)

    return (
        <div
            className={`flex justify-center mx-2 border border-white border-b-0 ${spriteBgClass[type]}`}>
            <img src={sprite} alt={name} />
        </div>
    )
}

export default PokemonImage