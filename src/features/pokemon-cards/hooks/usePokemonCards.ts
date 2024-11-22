import { AbilityType } from '@/entities/pokemon/types/abilityType.ts'
import { MoveType } from '@/entities/pokemon/types/moveType.ts'
import { PokemonType } from '@/entities/pokemon/types/pokemonType.ts'
import { fetchPokemonByNameOrId } from '@/features/pokemon-cards/fetch/fetchPokemon.ts'
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
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        if (nameOrId) {
            (async () => await getCard(nameOrId))()
        }
    }, [ nameOrId ])

    const getCard = async (nameOrId: string | number) => {
        setIsLoading(true)
        try {
            const { baseData, ability, move } = await fetchPokemonByNameOrId(nameOrId)
            const pokemonData = {
                baseData,
                ability,
                move,
                seen: 5,
                owned: 2,
            }
            setPokemonCards(prev => [ ...prev, pokemonData ])
        } catch (error) {
            console.error('Error fetching pokemon:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return { pokemonCards, isLoading }
}

export default usePokemonCards