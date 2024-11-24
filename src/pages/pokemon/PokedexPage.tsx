import { PokemonType } from '@/entities/pokemon/types/pokemonType.ts'
import Pokedex from '@/features/pokedex/components/Pokedex.tsx'
import Search from "@/features/pokedex/components/Search.tsx";

export interface PokedexInfo {
    name: string
    url: string
    seen: number
    owned: number
}

export interface ExtendedPokemonType extends PokemonType {
    seen: number
    owned: number
}

function PokedexPage() {
    return (
        <div className="flex flex-col items-center px-1 py-2 gap-2">
            <Search />
            <Pokedex />
        </div>
    )
}

export default PokedexPage