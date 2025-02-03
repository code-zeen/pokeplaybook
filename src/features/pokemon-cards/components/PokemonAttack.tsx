import { getTypeFromString } from '@/entities/pokemon/types/pokemonEnum.ts'
import TypeIcon from '../../../entities/pokemon/TypeIcon.tsx'

interface PokemonMoveProps {
    name: string
    damage: string
    cost: string[]
    text: string
}

function PokemonAttack({ name, damage, cost, text }: PokemonMoveProps) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                        {cost.map(cost => (
                            <TypeIcon type={getTypeFromString(cost)} />
                        ))}
                    </div>
                    <span className="capitalize"><b>{name}</b></span>
                </div>
                <span><b>{damage}</b></span>
            </div>
            <p className="text-xs">{text}</p>
        </div>
    )
}

export default PokemonAttack