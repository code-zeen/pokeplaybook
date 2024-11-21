import { TypeEnum } from '@/enum/pokemonEnum.ts'
import { spriteBgClass } from '../typeColorClasses'
import useSprite, { SpriteEnum } from '../useSprite'

interface PokemonImageProps {
    id: number
    name: string
    type: TypeEnum
}

function PokemonImage({ id, name, type }: PokemonImageProps) {
    const { spriteUrl } = useSprite(SpriteEnum.SHOWDOWN, id)

    return (
        <div
            className={`flex justify-center items-center mx-2 border border-white border-b-0 h-36 overflow-clip ${spriteBgClass[type]}`}>
            <img src={spriteUrl} alt={name} />
        </div>
    )
}

export default PokemonImage