import { StatNameEnum, TypeEnum } from '@/enum/pokemonEnum.ts'

export interface PokemonType {
    name: string
    id: number
    abilities: {
        ability: {
            name: string
            url: string
        }
        is_hidden: boolean
        slot: number
    }[]
    height: number
    weight: number
    moves: {
        move: {
            name: string
            url: string
        }[]
    }
    stats: StatType[]
    sprites: {
        back_default: string | null
        back_female: string | null
        back_shiny: string | null
        back_shiny_female: string | null
        front_default: string | null
        front_female: string | null
        front_shiny: string | null
        front_shiny_female: string | null
    }
    types: {
        slot: number
        type: TypeType
    }[]
}

export interface TypeType {
    name: TypeEnum
    url: string
}

export interface StatType {
    base_stat: number
    effort: number
    stat: {
        name: StatNameEnum
        url: string
    }
}

export interface FlavorTextEntryType {
    flavor_text: string
    language: {
        id: number
        name: string
        official: boolean
        iso639: string
        iso3166: string
    }
    version_group: {
        id: number
        name: string
        order: number
    }
}