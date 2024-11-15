export interface PokemonType {
  name: string
  id: number
  abilities: {
    ability: AbilityType
    is_hidden: boolean
    slot: number
  }[]
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
  }
}

export interface AbilityType {
  name: string
  url: string

}
export interface TypeType {
  name: string
  url: string
}