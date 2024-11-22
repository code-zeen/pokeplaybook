import { AbilityType } from '@/entities/pokemon/types/abilityType.ts'
import { MoveType } from '@/entities/pokemon/types/moveType.ts'
import { PokemonType } from '@/entities/pokemon/types/pokemonType.ts'

export interface PokemonCardType {
    baseData: PokemonType
    ability: AbilityType
    move: MoveType
    seen: number
    owned: number
}