import Pokedex from '@/features/pokedex/components/Pokedex.tsx'
import { Pokemon } from '@/features/pokedex/interface/Pokemon.ts'
import { setSearchKeyword } from '@/features/pokedex/pokeSlice.ts'
import Search from '@/shared/components/Search.tsx'

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
            <div className="flex flex-col items-center bg-gray-100 p-1 rounded-lg  gap-2">
                <Search setSearchKeyword={setSearchKeyword} />
                <Pokedex />
            </div>
        </div>
    )
}

export default PokedexPage