import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'

export interface Weakness {
    type: PokemonCardTypeEnum
    value: string
}