import CustomCard_Hp from '@/features/pokemon-cards/components/CustomCard/CustomCard_Hp.tsx'
import CustomCard_Name from '@/features/pokemon-cards/components/CustomCard/CustomCard_Name.tsx'
import CustomCard_Subtype from '@/features/pokemon-cards/components/CustomCard/CustomCard_Subtype.tsx'
import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'
import { PokemonCard } from '@/features/pokemon-cards/interface/PokemonCard.ts'

interface PokemonNameHeaderProps {
    pokemonCard: PokemonCard
    type: PokemonCardTypeEnum
}

export default function CustomCard_Name_Header({ pokemonCard, type }: PokemonNameHeaderProps) {
    return (
        <div className="flex justify-between items-center px-1 py-0.5">
            <div className="flex items-center gap-1 ml-[-8px]">
                <CustomCard_Subtype subtype={pokemonCard.subtypes?.[0]} evolvesFrom={pokemonCard.evolvesFrom} />
                <CustomCard_Name name={pokemonCard.name} />
            </div>
            <CustomCard_Hp hp={pokemonCard.hp}
                           type={type} />
        </div>
    )
}