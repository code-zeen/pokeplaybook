import { cardBgClass } from '@/features/pokedex/config/typeColorClasses.ts'
import CustomCard_Name_Header from '@/features/pokemon-cards/components/CustomCard/CustomCard_Name_Header.tsx'
import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'
import { PokemonCard as IPokemonCard } from '@/features/pokemon-cards/interface/PokemonCard.ts'
import TypeIcon from '@/shared/components/TypeIcon.tsx'
import {motion} from 'motion/react'
import CustomCard_Ability from './CustomCard_Ability.tsx'
import CustomCard_Attack from './CustomCard_Attack.tsx'
import CustomCard_Image from './CustomCard_Image.tsx'
import CustomCard_PhysicalInfo from './CustomCard_PhysicalInfo.tsx'

interface PokemonCardProps {
    pokemonCard: IPokemonCard
    index?: number
}

function CustomCard({ pokemonCard, index = 0 }: PokemonCardProps) {
    const type = pokemonCard?.types?.[0] as PokemonCardTypeEnum

    const xOffset = index * 24
    const rotationOffset = 2

    return (
        <motion.div
            className="absolute flex flex-col overflow-auto p-2.5 bg-gradient-to-b from-gray-300 via-gray-100 to-gray-300 w-[308px] h-[428px] border rounded-xl cursor-pointer"
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
                transition: { duration: 0.2 },
            }}>
            <div className={`flex flex-col h-full ${cardBgClass[type]} border rounded-lg`}>

                <div>
                    <CustomCard_Name_Header pokemonCard={pokemonCard} type={type} />
                    <CustomCard_Image number={pokemonCard.nationalPokedexNumbers[0]} name={pokemonCard.name}
                                      type={type} />
                    <CustomCard_PhysicalInfo number={pokemonCard.number} />
                </div>

                <div className="flex flex-col flex-grow justify-around p-2 gap-4">
                    {pokemonCard.abilities &&
                        <CustomCard_Ability
                            name={pokemonCard.abilities?.[0].name}
                            text={pokemonCard.abilities?.[0].text} />
                    }
                    {pokemonCard.attacks?.map(attack => (
                        <CustomCard_Attack
                            name={attack.name}
                            damage={attack.damage}
                            cost={attack.cost}
                            text={attack.text} />
                    ))}

                </div>

                <div>
                    <div className="flex gap-0.5 m-1 text-xs">
                        <div
                            className="flex flex-grow pl-1 pr-2 items-center bg-gray-400 rounded-tl-xl rounded-bl-lg rounded-br-3xl border border-gray-500 shadow-[1px_1px_1px_rgba(0,0,0,0.25)">
                            <div
                                className="flex justify-center items-center gap-1 w-full bg-gradient-to-b from-gray-300 via-gray-50 to-gray-300 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-lg border border-gray-300">
                                <span className="text-[10px]">weakness</span>
                                {pokemonCard.weaknesses?.map(each => (
                                    <div className="flex items-center">
                                        <TypeIcon type={each.type} height="12px" />
                                        <span className="font-bold">{each.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className="flex flex-grow pl-1 pr-2 items-center bg-gray-400 rounded-tl-xl rounded-bl-lg rounded-br-3xl border border-gray-500 shadow-[1px_1px_1px_rgba(0,0,0,0.25)">
                            <div
                                className="flex justify-center items-center gap-1 w-full bg-gradient-to-b from-gray-300 via-gray-50 to-gray-300 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-lg border border-gray-300">
                                <span className="text-[10px]">retreat</span>
                                <div className="flex items-center">
                                    {pokemonCard.retreatCost?.map(cost => (
                                        <TypeIcon type={cost} height="12px" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-0.5 p-1">
                        <div className="flex border rounded bg-white text-xs px-0.5">G</div>
                        <div
                            className="flex border rounded bg-black text-xs text-white px-0.5 uppercase font-bold">{pokemonCard.id.split('-')[0]}</div>
                        <div
                            className="flex text-xs drop-shadow-[0_0_1px_white] font-bold">{pokemonCard.number}/1125 {pokemonCard.rarity}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CustomCard