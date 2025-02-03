import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'
import TypeIcon from '@/shared/components/TypeIcon.tsx'

interface PokemonMoveProps {
    name: string
    damage: string
    cost: PokemonCardTypeEnum[]
    text: string
}

function PokemonAttack({ name, damage, cost, text }: PokemonMoveProps) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                        {cost.map(cost => (
                            <TypeIcon type={cost} />
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