import questionPng from '/missing.png'
import { useEffect, useState } from 'react'

export enum SpriteEnum {
    GEN_V_ANIMATED,
    SHOWDOWN,
}

const checkUrl = async (url: string): Promise<boolean> => {
    try {
        const res = await fetch(url, { method: 'HEAD' })
        return res.ok
    } catch {
        return false
    }
}

export const getSpriteUrl = async (type: SpriteEnum, id: number): Promise<string | undefined> => {
    const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
    const path: Record<SpriteEnum, string> = {
        [SpriteEnum.GEN_V_ANIMATED]: 'versions/generation-v/black-white/animated',
        [SpriteEnum.SHOWDOWN]: 'other/showdown',
    }

    const gifUrl = `${baseUrl}/${path[type]}/${id}.gif`
    if (await checkUrl(gifUrl)) {
        return gifUrl
    }
    const pngUrl = `${baseUrl}/${id}.png`
    if (await checkUrl(pngUrl)) {
        return pngUrl
    }

    console.error(`No sprite found for ID: ${id}`)
    return undefined
}
const useSprite = (spriteEnum: SpriteEnum, id: number) => {
    const [ spriteUrl, setSpriteUrl ] = useState<string>(questionPng)

    useEffect(() => {
        (async () => {
            setSpriteUrl(questionPng)
            const url = await getSpriteUrl(spriteEnum, id)
            setSpriteUrl(url || questionPng)
        })()
    }, [ spriteEnum, id ])

    return { spriteUrl }
}

export default useSprite