import useSprite, { SpriteEnum } from '../useSprite.ts'

interface PokeballGrayBgProps {
    id: number
    name: string
}

function PokeballGrayBg({ id, name }: PokeballGrayBgProps) {
    const { spriteUrl } = useSprite(SpriteEnum.GEN_V_ANIMATED, id)

    return (
        <div className="absolute">
            <div className="flex flex-col relative justify-center items-center">
                <div
                    className="w-40 h-20 border-8 border-gray-50 bg-gray-300 rounded-t-full transform"
                    style={{ transform: 'translateY(1px)' }}>
                </div>
                <div
                    className="w-40 h-20 border-8 border-gray-50 bg-gray-200 rounded-b-full transform"
                    style={{ transform: 'translateY(-1px)' }}>
                </div>
                <div className="bg-gray-50 w-16 h-16 rounded-full absolute"></div>
                <div className="bg-gray-200 w-12 h-12 rounded-full absolute"></div>
                <div className="absolute">
                    <img
                        src={spriteUrl}
                        alt={name} />
                </div>
            </div>
        </div>
    )
}

export default PokeballGrayBg