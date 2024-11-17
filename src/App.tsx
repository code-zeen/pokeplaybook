import { useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import PokemonCard from './components/pokemon/pokemon-card/PokemonCard.tsx'
import { PokemonType } from "./components/pokemon/types/pokemonType";
import Pokedex from "./components/pokemon/pokedex/Pokedex";
import { AbilityType } from "./components/pokemon/types/abilityType";
import { MoveType } from "./components/pokemon/types/moveType";
import { generations } from "./components/pokemon/pokedex/generationQuery";

export interface PokedexInfo extends PokemonType {
    seen: number
    owned: number
}

const SEEN = 10
const OWNED = 10

function App() {
    // const [ questions, setQuestions ] = useState<QuestionType[]>([])
    const [ pokemons, setPokemons ] = useState<PokedexInfo[]>([])
    const [ pokemon, setPokemon ] = useState<PokedexInfo | null>(null)
    const [ ability, setAbility ] = useState<AbilityType>()
    const [ move, setMove ] = useState<MoveType>()
    const [ selectedPokemonName, setSelectedPokemonName ] = useState<string>()

    useEffect(() => {
        (async () => await fetchAllPokemons())()
    }, [])

    useEffect(() => {
        if (selectedPokemonName) {
            (async () => {
                await fetchPokemonByNameOrId(selectedPokemonName)
            })()
        }
    }, [ selectedPokemonName ])


    const fetchAllPokemons = async () => {
        const index = 8
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${generations[index].offset}&limit=${generations[index].limit}`)
        const data = await res.json()

        setPokemons(data.results.map((pokemon: { name: string, url: string }) => ({
            ...pokemon,
            seen: SEEN,
            owned: OWNED,
        })))
    }

    const fetchPokemonByNameOrId = async (name: string | number) => {
        const resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const dataPokemon = await resPokemon.json()

        const resAbility = await fetch(`https://pokeapi.co/api/v2/ability/${dataPokemon?.abilities[0].ability.name}`)
        const dataAbility = await resAbility.json()

        const resMove = await fetch(`https://pokeapi.co/api/v2/move/${dataPokemon?.moves[0].move.name}`)
        const dataMove = await resMove.json()

        setPokemon({
            ...dataPokemon,
            seen: SEEN,
            owned: OWNED,
        })
        setAbility(dataAbility)
        setMove(dataMove)
    }


    // const fetchQuestions = async () => {
    //     const res = await fetch('http://localhost:3001/questions')
    //     const data = await res.json()
    //     setQuestions(data)
    // }


    return (
        <DndProvider backend={HTML5Backend}>
            {/*<div className="max-w-5xl mx-auto">*/}
            {/*  <div className="flex flex-col p-1 border gap-2">*/}
            {/*    {questions.map(q => (*/}
            {/*      <Question key={q.id} question={q} />*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div>
                <div className="flex gap-4">
                    <Pokedex pokemons={pokemons} pokemon={pokemon} selectedPokemonName={selectedPokemonName}
                             setSelectedPokemonName={setSelectedPokemonName} />

                    {(pokemon && ability && move) &&
                        <PokemonCard pokemon={pokemon} ability={ability} move={move} />
                    }
                </div>
            </div>
        </DndProvider>
    )
}

export default App