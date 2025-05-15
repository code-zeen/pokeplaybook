import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'
import TypeIcon from '@/shared/components/TypeIcon.tsx'

interface PokemonHpProps {
    hp: string
    type: PokemonCardTypeEnum
}

function CustomCard_Hp({ hp, type }: PokemonHpProps) {
    return (
        <div className="flex items-center gap-0.5">
            <span>
                <span className="text-[8px] font-bold">HP</span>
                <b>{hp}</b>
            </span>
            <TypeIcon type={type} height="22px" />
        </div>
    )
}

export default CustomCard_Hp