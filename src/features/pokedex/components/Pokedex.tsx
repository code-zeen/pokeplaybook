import PokemonView from '@/features/pokedex/components/PokemonView.tsx'
import { ExtendedPokemonType, PokedexInfo } from '@/pages/pokemon/PokedexPage.tsx'
import GenerationSelector from './GenerationSelector.tsx'
import PokedexHeader from './PokedexHeader.tsx'
import PokedexList from './PokedexList.tsx'

interface PokedexProps {
    pokemons: PokedexInfo[]
    pokemon: ExtendedPokemonType | null
    selectedGenerationIndex: number
    setSelectedGenerationIndex: (index: number) => void
    selectedPokemonName?: string
    setSelectedPokemonName: (name: string) => void
}

function Pokedex({
                     pokemons,
                     pokemon,
                     selectedGenerationIndex,
                     setSelectedGenerationIndex,
                     selectedPokemonName,
                     setSelectedPokemonName
                 }: PokedexProps) {

    return (
        <div className="flex flex-col bg-gray w-full max-w-sm gap-1">
            <PokedexHeader />
            <PokemonView pokemon={pokemon} />
            <GenerationSelector selectedGenerationIndex={selectedGenerationIndex}
                                setSelectedGenerationIndex={setSelectedGenerationIndex} />
            <PokedexList pokemons={pokemons} selectedPokemonName={selectedPokemonName}
                         setSelectedPokemonName={setSelectedPokemonName} />
        </div>
    )
}

export default Pokedex