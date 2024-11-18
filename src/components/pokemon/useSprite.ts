import { useEffect, useState } from 'react'
import { getSprite, SpriteEnum } from './getSprite'

const useSprite = (spriteEnum: SpriteEnum, id: number) => {
    const [ spriteSrc, setSpriteSrc ] = useState<string>('')

    useEffect(() => {
        const fetchSprite = async () => {
            const sprite = await getSprite(spriteEnum, id)
            setSpriteSrc(sprite || '')
        }
        fetchSprite()
    }, [ spriteEnum, id ])

    return { spriteSrc }
}

export default useSprite