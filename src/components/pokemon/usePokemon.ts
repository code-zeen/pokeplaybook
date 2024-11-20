import { fetchPokemonByNameOrId } from '@/components/pokemon/fetch/fetchPokemon.ts'
import { AbilityType } from '@/components/pokemon/types/abilityType.ts'
import { MoveType } from '@/components/pokemon/types/moveType.ts'
import { PokemonType } from '@/components/pokemon/types/pokemonType.ts'
import { useEffect, useState } from 'react'

export interface ExtendedPokemonType extends PokemonType {
    seen: number
    owned: number
}

const usePokemon = (nameOrId: string | number | null) => {
    const [ pokemon, setPokemon ] = useState<ExtendedPokemonType | null>(null)
    const [ ability, setAbility ] = useState<AbilityType | null>(null)
    const [ move, setMove ] = useState<MoveType | null>(null)

    useEffect(() => {
        if (nameOrId) {
            (async () => await getCard(nameOrId))()
        }
    }, [ nameOrId ])

    const getCard = async (nameOrId: string | number) => {
        const { pokemon, ability, move } = await fetchPokemonByNameOrId(nameOrId)
        setPokemon({
            ...pokemon,
            seen: 5,
            owned: 2,
        })
        setAbility(ability)
        setMove(move)
    }

    return { pokemon, ability, move }
}

export default usePokemon