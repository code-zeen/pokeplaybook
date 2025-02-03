import { spriteBgClass } from '@/entities/pokemon/typeColorClasses.ts'
import { TypeEnum } from '@/entities/pokemon/types/pokemonEnum.ts'
import useSprite, { SpriteEnum } from '../../../entities/pokemon/hooks/useSprite.ts'

interface PokemonImageProps {
    number: string
    name: string
    type: TypeEnum
}

function PokemonImage({ number, name, type }: PokemonImageProps) {
    const { spriteUrl } = useSprite(SpriteEnum.SHOWDOWN, number)

    return (
        <div
            className={`flex justify-center items-center mx-2 border border-white border-b-0 h-36 overflow-clip ${spriteBgClass[type]}`}>
            <img src={spriteUrl} alt={name} />
        </div>
    )
}

export default PokemonImage