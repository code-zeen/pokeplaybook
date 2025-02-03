import { getTypeFromString } from '@/entities/pokemon/types/pokemonEnum.ts'
import TypeIcon from '../../../entities/pokemon/TypeIcon.tsx'

interface PokemonHpProps {
    hp: string
    type: string
}

function PokemonHp({ hp, type }: PokemonHpProps) {
    return (
        <div className="flex items-center gap-0.5">
            <span className="text-xs">HP</span>
            <span><b>{hp}</b></span>
            <TypeIcon type={getTypeFromString(type)} />
        </div>
    )
}

export default PokemonHp