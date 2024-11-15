import { FlavorTextEntryType } from "./pokemonType.ts";
import { TypeEnum } from "../../../enum/pokemonEnum";

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