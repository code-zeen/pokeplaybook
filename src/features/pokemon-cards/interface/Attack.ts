import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'

export interface Attack {
    convertedEnergyCost: number
    cost: PokemonCardTypeEnum[]
    damage: string
    name: string
    text: string
}