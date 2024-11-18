const sprites = import.meta.glob('/node_modules/pokemon-sprites/sprites/pokemon/versions/generation-v/black-white/animated/*.gif', { eager: true })

export const getSprite = (id: number) => {
  const sprite = sprites[`/node_modules/pokemon-sprites/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`] as {
    default: string
  }
  return sprite?.default
}