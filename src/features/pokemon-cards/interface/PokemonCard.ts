import { Ability } from '@/features/pokemon-cards/interface/Ability.ts'
import { Attack } from '@/features/pokemon-cards/interface/Attack.ts'
import { CardMarket } from '@/features/pokemon-cards/interface/CardMarket.ts'
import { Images } from '@/features/pokemon-cards/interface/Images.ts'
import { Legalities } from '@/features/pokemon-cards/interface/Legalities.ts'
import { Resistance } from '@/features/pokemon-cards/interface/Resistance.ts'
import { SetInfo } from '@/features/pokemon-cards/interface/SetInfo.ts'
import { TCGPlayer } from '@/features/pokemon-cards/interface/TCGPlayer.ts'
import { Weakness } from '@/features/pokemon-cards/interface/Weakness.ts'

export interface PokemonCard {
    abilities?: Ability[]
    artist?: string
    attacks?: Attack[]
    cardmarket?: CardMarket
    convertedRetreatCost?: number
    evolvesFrom?: string
    evolvesTo?: string[]
    flavorText?: string
    hp?: string
    id: string
    images: Images
    legalities: Legalities
    name: string
    nationalPokedexNumbers?: number[]
    number: string
    rarity?: string
    regulationMark?: string
    resistances?: Resistance[]
    retreatCost?: string[]
    rules?: string[]
    set: SetInfo
    subtypes?: string[]
    supertype: string
    tcgplayer?: TCGPlayer
    types?: string[]
    weaknesses?: Weakness[]
}