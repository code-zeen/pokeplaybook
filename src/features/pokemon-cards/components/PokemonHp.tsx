import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'
import TypeIcon from '@/shared/components/TypeIcon.tsx'

interface PokemonHpProps {
    hp: string
    type: PokemonCardTypeEnum
}

function PokemonHp({ hp, type }: PokemonHpProps) {
    return (
        <div className="flex items-center gap-0.5">
            <span className="text-xs">HP</span>
            <span><b>{hp}</b></span>
            <TypeIcon type={type} />
        </div>
    )
}

export default PokemonHp