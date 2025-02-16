import { PokedexTypeEnum } from '@/features/pokedex/interface/enums.ts'
import { FlavorTextEntryType } from './Pokemon.ts'

export interface Move {
    id: number
    name: string
    accuracy: number
    effect_chance: number
    pp: number
    priority: number
    power: number | null
    flavor_text_entries: FlavorTextEntryType[]
    type: {
        name: PokedexTypeEnum
        url: string
    }
}