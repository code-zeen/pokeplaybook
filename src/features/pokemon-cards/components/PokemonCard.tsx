import { cardBgClass } from '@/entities/pokemon/typeColorClasses.ts'
import { StatNameEnum, TypeEnum } from '@/entities/pokemon/types/pokemonEnum.ts'
import { FlavorTextEntryType, StatType } from '@/entities/pokemon/types/pokemonType.ts'
import { ExtendedPokemonCard } from '@/features/pokemon-cards/types/extendedPokemonCard.ts'
import { motion } from 'framer-motion'
import PokemonAbility from './PokemonAbility.tsx'
import PokemonHp from './PokemonHp.tsx'
import PokemonImage from './PokemonImage.tsx'
import PokemonMove from './PokemonMove.tsx'
import PokemonName from './PokemonName.tsx'
import PokemonPhysicalInfo from './PokemonPhysicalInfo.tsx'

interface PokemonCardProps {
    pokemon: ExtendedPokemonCard
    index?: number
}

function PokemonCard({ pokemon, index = 0 }: PokemonCardProps) {
    const { baseData, ability, move } = pokemon
    const findStat = (stats: StatType[], name: StatNameEnum): StatType => {
        return stats.find(each => each.stat.name === name)!
    }

    const findEnglishFlavorText = (flavorTextEntries: FlavorTextEntryType[]) => {
        return flavorTextEntries.find(each => each.language.name === 'en')!
    }

    if (!pokemon || !ability || !move) return null

    const type = baseData.types[0].type.name as TypeEnum

    const xOffset = index * 24
    const rotationOffset = 2

    return (
        <motion.div
            className="absolute flex flex-col overflow-auto p-2 bg-gray-300 w-72 h-[420px] border rounded cursor-pointer"
            style={{
                left: `${xOffset}px`,
                zIndex: index,
            }}
            layout
            initial={{ scale: 0.75 }}
            animate={{
                scale: 1,
            }}
            whileHover={{
                scale: 1.02,
                rotate: rotationOffset,
                translateY: '-48px',
                transition: { duration: 0.2 }
            }}>
            <div className={`flex flex-col h-full ${cardBgClass[type]} border rounded-lg`}>

                <div>
                    <div className="flex justify-between px-2 py-0.5">
                        <PokemonName name={baseData.name} />
                        <PokemonHp hp={findStat(baseData.stats, StatNameEnum.HP).base_stat}
                                   type={baseData.types[0].type.name} />
                    </div>
                    <PokemonImage id={baseData.id} name={baseData.name} type={type} />
                    <PokemonPhysicalInfo number={baseData.id} height={baseData.height} weight={baseData.weight} />
                </div>

                <div className="flex flex-col flex-grow justify-around p-4 gap-4">
                    <PokemonAbility name={ability.name}
                                    flavorText={findEnglishFlavorText(ability.flavor_text_entries).flavor_text} />
                    <PokemonMove name={move.name} power={move.power} type={move.type.name}
                                 flavorText={findEnglishFlavorText(move.flavor_text_entries).flavor_text} />
                </div>

                <div>
                    <div className="flex gap-0.5 m-1 px-1 justify-between text-xs border border-r-0 border-l-0">
                        <span>weakness</span>
                        <span>retreat</span>
                    </div>
                    <div className="flex gap-0.5 p-1">
                        <div className="flex border rounded bg-white text-xs px-0.5">G</div>
                        <div className="flex border rounded bg-black text-xs text-white px-0.5">sv2a</div>
                        <div className="flex text-white text-xs">{baseData.id}/1125 AR</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PokemonCard