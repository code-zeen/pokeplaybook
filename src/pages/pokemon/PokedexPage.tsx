import Pokedex from '@/features/pokedex/components/Pokedex.tsx'
import Search from '@/features/pokedex/components/Search.tsx'
import { Pokemon } from '@/features/pokedex/interface/Pokemon.ts'

export interface ExtendedPokedexItem {
    name: string
    url: string
    seen: number
    owned: number
}

export interface ExtendedPokedexEntry extends Pokemon {
    seen: number
    owned: number
}

function PokedexPage() {
    return (
        <div className="flex flex-col items-center px-1 py-2">
            <div className="flex flex-col itesm-center bg-gray-100 p-1 rounded-lg  gap-2">
                <Search />
                <Pokedex />
            </div>
        </div>
    )
}

export default PokedexPage