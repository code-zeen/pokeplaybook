import { fetchPokemonByNameOrId } from '@/components/pokemon/fetch/fetchPokemon.ts'
import { AbilityType } from '@/components/pokemon/types/abilityType.ts'
import { MoveType } from '@/components/pokemon/types/moveType.ts'
import { PokemonType } from '@/components/pokemon/types/pokemonType.ts'
import { useEffect, useState } from 'react'

export interface ExtendedPokemonType {
    baseData: PokemonType
    ability: AbilityType
    move: MoveType
    seen: number
    owned: number
}

const usePokemonCards = (nameOrId: string | number | null) => {
    const [ pokemonCards, setPokemonCards ] = useState<ExtendedPokemonType[]>([])

    useEffect(() => {
        if (nameOrId) {
            (async () => await getCard(nameOrId))()
        }
    }, [ nameOrId ])

    const getCard = async (nameOrId: string | number) => {
        const { baseData, ability, move } = await fetchPokemonByNameOrId(nameOrId)
        const pokemonData = {
            baseData,
            ability,
            move,
            seen: 5,
            owned: 2,
        }
        setPokemonCards(prev => [ ...prev, pokemonData ])
    }

    return { pokemonCards }
}

export default usePokemonCards