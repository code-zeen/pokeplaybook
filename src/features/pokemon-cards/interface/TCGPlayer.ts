import { Price } from '@/features/pokemon-cards/interface/Price.ts'

// USD
export interface TCGPlayer {
    prices: {
        holofoil?: Price
        normal?: Price
        reverseHolofoil?: Price
        '1stEditionHolofoil'?: Price
        '1stEditionNormal'?: Price
    }
    updatedAt: string
    url: string
}