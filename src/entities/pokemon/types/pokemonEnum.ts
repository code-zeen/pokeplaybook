export enum StatNameEnum {
    ATTACK = 'attack',
    DEFENSE = 'defense',
    HP = 'hp',
    SPECIAL_ATTACK = 'special_attack',
    SPECIAL_DEFENSE = 'special_defense',
    SPEED = 'speed',
}

export enum TypeEnum {
    BUG = 'bug',
    COLORLESS = 'colorless',
    DARK = 'dark',
    DRAGON = 'dragon',
    ELECTRIC = 'electric',
    FAIRY = 'fairy',
    FIGHTING = 'fighting',
    FIRE = 'fire',
    FLYING = 'flying',
    GHOST = 'ghost',
    GRASS = 'grass',
    GROUND = 'ground',
    ICE = 'ice',
    NORMAL = 'normal',
    POISON = 'poison',
    PSYCHIC = 'psychic',
    ROCK = 'rock',
    STEEL = 'steel',
    WATER = 'water',
}

function isPokemonType(type: string): type is TypeEnum {
    const normalizedInput = type.toLowerCase()
    return Object.values(TypeEnum).includes(normalizedInput as TypeEnum)
}

export function getTypeFromString(type: string): TypeEnum {
    const normalizedInput = type.toLowerCase()
    if (isPokemonType(normalizedInput)) {
        return normalizedInput as TypeEnum
    }
    throw new Error(`Invalid Pokemon type: ${type}`)
}