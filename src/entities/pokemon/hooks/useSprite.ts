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

export const getSpriteUrl = async (type: SpriteEnum, number: string): Promise<string | undefined> => {
    const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
    const path: Record<SpriteEnum, string> = {
        [SpriteEnum.GEN_V_ANIMATED]: 'versions/generation-v/black-white/animated',
        [SpriteEnum.SHOWDOWN]: 'other/showdown',
    }

    const gifUrl = `${baseUrl}/${path[type]}/${number}.gif`
    if (await checkUrl(gifUrl)) {
        return gifUrl
    }
    const pngUrl = `${baseUrl}/${number}.png`
    if (await checkUrl(pngUrl)) {
        return pngUrl
    }

    console.error(`No sprite found for ID: ${number}`)
    return undefined
}
const useSprite = (spriteEnum: SpriteEnum, number: string) => {
    const [ spriteUrl, setSpriteUrl ] = useState<string>(questionPng)

    useEffect(() => {
        (async () => {
            setSpriteUrl(questionPng)
            const url = await getSpriteUrl(spriteEnum, number)
            setSpriteUrl(url || questionPng)
        })()
    }, [ spriteEnum, number ])

    return { spriteUrl }
}

export default useSprite