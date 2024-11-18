import { spriteBgClass } from "../typeColorClasses";
import { TypeEnum } from "../../../enum/pokemonEnum";
import { SpriteEnum } from '../getSprite'
import useSprite from '../useSprite'

interface PokemonImageProps {
    id: number
    name: string
    type: TypeEnum
}

function PokemonImage({ id, name, type }: PokemonImageProps) {
    const { spriteSrc } = useSprite(SpriteEnum.SHOWDOWN, id)

    return (
        <div className={`flex justify-center items-center mx-2 border border-white border-b-0 h-full ${spriteBgClass[type]}`}>
            <img src={spriteSrc} alt={name} />
        </div>
    )
}

export default PokemonImage