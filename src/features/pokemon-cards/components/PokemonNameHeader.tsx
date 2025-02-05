import PokemonHp from '@/features/pokemon-cards/components/PokemonHp.tsx'
import PokemonName from '@/features/pokemon-cards/components/PokemonName.tsx'
import PokemonSubtype from '@/features/pokemon-cards/components/PokemonSubtype.tsx'
import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'

interface PokemonNameHeaderProps {
    name: string
    hp: string
    type: PokemonCardTypeEnum
    subtype: string
}

export default function PokemonNameHeader({ name, hp, type, subtype }: PokemonNameHeaderProps) {
    return (
        <div className="flex justify-between items-center px-1 py-0.5">
            <div className="flex items-center gap-1 ml-[-8px]">
                <PokemonSubtype subtype={subtype} />
                <PokemonName name={name} />
            </div>
            <PokemonHp hp={hp}
                       type={type} />
        </div>
    )
}