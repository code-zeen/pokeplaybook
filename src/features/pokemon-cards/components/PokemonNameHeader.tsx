import PokemonHp from '@/features/pokemon-cards/components/PokemonHp.tsx'
import PokemonName from '@/features/pokemon-cards/components/PokemonName.tsx'
import PokemonSubtype from '@/features/pokemon-cards/components/PokemonSubtype.tsx'
import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'
import { PokemonCard } from '@/features/pokemon-cards/interface/PokemonCard.ts'

interface PokemonNameHeaderProps {
    pokemonCard: PokemonCard
    type: PokemonCardTypeEnum
}

export default function PokemonNameHeader({ pokemonCard, type }: PokemonNameHeaderProps) {
    return (
        <div className="flex justify-between items-center px-1 py-0.5">
            <div className="flex items-center gap-1 ml-[-8px]">
                <PokemonSubtype subtype={pokemonCard.subtypes?.[0]} evolvesFrom={pokemonCard.evolvesFrom} />
                <PokemonName name={pokemonCard.name} />
            </div>
            <PokemonHp hp={pokemonCard.hp}
                       type={type} />
        </div>
    )
}