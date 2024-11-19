const spriteGif = import.meta.glob('/node_modules/pokemon-sprites/sprites/pokemon/**/*.gif', { eager: false })
const spritePng = import.meta.glob('/node_modules/pokemon-sprites/sprites/pokemon/**/*.png', { eager: false })

export enum SpriteEnum {
    GEN_V_ANIMATED,
    SHOWDOWN,
}

export const getSprite = async (type: SpriteEnum, id: number): Promise<string | undefined> => {
    const baseUrl = () => {
        switch (type) {
            case SpriteEnum.GEN_V_ANIMATED:
                return 'versions/generation-v/black-white/animated'
            case SpriteEnum.SHOWDOWN:
                return 'other/showdown'
        }
    }

    let spriteImporter = spriteGif[`/node_modules/pokemon-sprites/sprites/pokemon/${baseUrl()}/${id}.gif`]

    if (!spriteImporter) {
        spriteImporter = spritePng[`/node_modules/pokemon-sprites/sprites/pokemon/${id}.png`]

        if (!spriteImporter) {
            console.error(`Sprite not found for ID: ${id}`)
            return undefined
        }
    }

    try {
        const sprite = await spriteImporter() as { default: string }
        return sprite.default
    } catch (err) {
        console.error(`Error loading sprite for ID: ${id}`, err)
    }

}