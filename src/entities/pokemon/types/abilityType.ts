import { FlavorTextEntryType } from './pokemonType.ts'

export interface AbilityType {
    id: number
    name: string
    flavor_text_entries: FlavorTextEntryType[]
}