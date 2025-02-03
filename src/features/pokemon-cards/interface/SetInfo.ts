import { Legalities } from '@/features/pokemon-cards/interface/Legalities.ts'

export interface SetInfo {
    id: string
    images: {
        logo: string
        symbol: string
    }
    legalities: Legalities
    name: string
    printedTotal: number
    releaseDate: string
    series: string
    total: number
}