import { spriteBgClass } from '@/features/pokedex/config/typeColorClasses.ts'
import useSprite, { SpriteEnum } from '@/features/pokedex/hooks/useSprite.ts'
import { PokedexTypeEnum } from '@/features/pokedex/interface/enums.ts'

interface PokemonImageProps {
    number: string
    name: string
    type: PokedexTypeEnum
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