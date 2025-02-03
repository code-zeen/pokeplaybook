import { cardBgClass } from '@/features/pokedex/config/typeColorClasses.ts'
import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'
import { PokemonCard as IPokemonCard } from '@/features/pokemon-cards/interface/PokemonCard.ts'
import { motion } from 'framer-motion'
import PokemonAbility from './PokemonAbility.tsx'
import PokemonAttack from './PokemonAttack.tsx'
import PokemonHp from './PokemonHp.tsx'
import PokemonImage from './PokemonImage.tsx'
import PokemonName from './PokemonName.tsx'
import PokemonPhysicalInfo from './PokemonPhysicalInfo.tsx'

interface PokemonCardProps {
    pokemonCard: IPokemonCard
    index?: number
}

function PokemonCard({ pokemonCard, index = 0 }: PokemonCardProps) {
    const type = pokemonCard?.types?.[0] as PokemonCardTypeEnum

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
                        <PokemonName name={pokemonCard.name} />
                        <PokemonHp hp={pokemonCard.hp}
                                   type={type} />
                    </div>
                    <PokemonImage number={pokemonCard.number} name={pokemonCard.name} type={type} />
                    <PokemonPhysicalInfo number={pokemonCard.number} />
                </div>

                <div className="flex flex-col flex-grow justify-around p-4 gap-4">
                    {pokemonCard.abilities?.map(ability => (
                        <PokemonAbility
                            name={ability.name}
                            text={ability.text} />
                    ))}
                    {pokemonCard.attacks?.map(attack => (
                        <PokemonAttack
                            name={attack.name}
                            damage={attack.damage}
                            cost={attack.cost}
                            text={attack.text} />
                    ))}

                </div>

                <div>
                    <div className="flex gap-0.5 m-1 px-1 justify-between text-xs border border-r-0 border-l-0">
                        <span>weakness</span>
                        <span>retreat</span>
                    </div>
                    <div className="flex gap-0.5 p-1">
                        <div className="flex border rounded bg-white text-xs px-0.5">G</div>
                        <div className="flex border rounded bg-black text-xs text-white px-0.5">sv2a</div>
                        <div className="flex text-white text-xs">{pokemonCard.number}/1125 AR</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PokemonCard