import PokemonView from '@/features/pokedex/components/PokemonView.tsx'
import GenerationSelector from './GenerationSelector.tsx'
import PokedexHeader from './PokedexHeader.tsx'
import PokedexList from './PokedexList.tsx'
import { useAppSelector } from "@/app/store/hooks.ts";

interface PokedexProps {
    selectedPokemonName?: string
    setSelectedPokemonName: (name: string) => void
}

function Pokedex({
                     selectedPokemonName,
                     setSelectedPokemonName
                 }: PokedexProps) {
    const { pokedexList: pokemons, pokedexEntry: pokemon } = useAppSelector(state => state.pokedex)

    return (
        <div className="flex flex-col bg-gray w-full max-w-sm gap-1">
            <PokedexHeader />
            <PokemonView pokemon={pokemon} />
            <GenerationSelector />
            <PokedexList pokemons={pokemons} selectedPokemonName={selectedPokemonName}
                         setSelectedPokemonName={setSelectedPokemonName} />
        </div>
    )
}

export default Pokedex