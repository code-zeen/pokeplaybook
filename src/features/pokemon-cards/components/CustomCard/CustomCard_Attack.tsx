import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'
import TypeIcon from '@/shared/components/TypeIcon.tsx'

interface PokemonMoveProps {
    name: string
    damage: string
    cost: PokemonCardTypeEnum[]
    text: string
}

function CustomCard_Attack({ name, damage, cost, text }: PokemonMoveProps) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col w-full">
                <div className="grid grid-cols-[2.5fr,5.5fr,1fr]">
                    <div className="flex items-center">
                        {cost.map((type, index) => (
                            <TypeIcon key={index} type={type} />
                        ))}
                    </div>
                    <span className="capitalize"><b>{name}</b></span>
                    <span className="flex relative text-right">
                        <b className="text-right w-full">{damage.replace(/[^\d]/g, '')}</b>
                        {/[^\d]$/.test(damage) && (
                            <span className="absolute right-[-9px] top-0 text-xs">{damage.slice(-1)}</span>
                        )}
                    </span>
                </div>
            </div>
            <p className="text-[11px] leading-tight">{text}</p>
        </div>
    )
}

export default CustomCard_Attack