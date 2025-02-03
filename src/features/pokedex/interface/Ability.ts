import { FlavorTextEntryType } from './Pokemon.ts'

export interface Ability {
    id: number
    name: string
    flavor_text_entries: FlavorTextEntryType[]
}