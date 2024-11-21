import { TypeEnum } from '@/enum/pokemonEnum.ts'
import { FlavorTextEntryType } from './pokemonType.ts'

export interface MoveType {
    id: number
    name: string
    accuracy: number
    effect_chance: number
    pp: number
    priority: number
    power: number | null
    flavor_text_entries: FlavorTextEntryType[]
    type: {
        name: TypeEnum
        url: string
    }
}