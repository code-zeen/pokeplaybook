import { useAppDispatch, useAppSelector } from '@/app/store/hooks.ts'
import { useGetPokedexListByGenerationIndexQuery } from '@/features/pokedex/pokeapi.ts'
import { setSearchKeyword } from '@/features/pokedex/pokedexSlice.ts'
import Pokeball from './Pokeball.tsx'
import PokeballContainer from './PokeballContainer.tsx'

function PokedexList() {
    const { searchKeyword, generationIndex } = useAppSelector(state => state.pokedex)
    const { data: pokemonList, error, isLoading } = useGetPokedexListByGenerationIndexQuery(generationIndex)
    const dispatch = useAppDispatch()

    const handleClick = (name: string) => {
        dispatch(setSearchKeyword(name))
    }

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error occurred</div>
    if (!pokemonList) return <div>No Pokémon found</div>

    return (
        <div className="flex border-2 rounded overflow-auto bg-white border-black min-w-56 h-72">
            <ol className="w-full">
                {pokemonList.map((pokemon, index) => (
                    <li key={index}>
                        <div
                            className={`flex gap-1 hover:bg-rose-100 active:bg-rose-200 cursor-pointer ${searchKeyword === pokemon.name ? 'bg-rose-200' : ''}`}
                            onClick={() => handleClick(pokemon.name)}>
                            <div className="flex justify-center items-center bg-red-500 w-8 h-8">
                                {pokemon.seen > 0 &&
                                    <PokeballContainer>
                                        {pokemon.owned > 0 &&
                                            <Pokeball />
                                        }
                                    </PokeballContainer>
                                }
                            </div>
                            <div className="flex gap-3 p-1 pr-4">
                                <span
                                    className="font-mono w-10 text-right">{pokemon.url.match(/\/(\d+)\/$/)?.[1]}</span>
                                <span className="capitalize">{pokemon.name}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default PokedexList