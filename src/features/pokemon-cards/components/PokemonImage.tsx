import { spriteBgClass } from '@/features/pokedex/config/typeColorClasses.ts'
import useSprite, { SpriteEnum } from '@/features/pokedex/hooks/useSprite.ts'
import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'

interface PokemonImageProps {
    number: number
    name: string
    type: PokemonCardTypeEnum
}

function PokemonImage({ number, name, type }: PokemonImageProps) {
    const { spriteUrl } = useSprite(SpriteEnum.SHOWDOWN, number)

    return (
        <div
            className={`flex justify-center items-center mx-2 border border-white border-b-0 h-36 overflow-clip ${spriteBgClass[type]} shadow-[inset_2px_2px_2px_rgba(0,0,0,0.25)]`}>
            <img src={spriteUrl} alt={name} />
        </div>
    )
}

export default PokemonImage