import PokemonView from '@/features/pokedex/components/PokemonView.tsx'
import GenerationSelector from './GenerationSelector.tsx'
import PokedexHeader from './PokedexHeader.tsx'
import PokedexList from './PokedexList.tsx'


function Pokedex() {

    return (
        <div className="flex flex-col bg-gray w-full max-w-sm gap-1">
            <PokedexHeader />
            <PokemonView />
            <GenerationSelector />
            <PokedexList />
        </div>
    )
}

export default Pokedex