import { spriteBgClass } from "../typeColorClasses";
import { TypeEnum } from "../../../enum/pokemonEnum";
import { SpriteEnum } from '../getSprite'
import useSprite from '../useSprite'

interface PokemonImageProps {
    name: string
    type: TypeEnum
}

function PokemonImage({ name, type }: PokemonImageProps) {
    const { spriteSrc } = useSprite(SpriteEnum.SHOWDOWN, 151)

    return (
        <div
            className={`flex justify-center mx-2 border border-white border-b-0 ${spriteBgClass[type]}`}>
            <img src={spriteSrc} alt={name} />
        </div>
    )
}

export default PokemonImage