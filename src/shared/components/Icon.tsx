import { SVGAttributes } from 'react'
import { IconType } from 'react-icons'
import { TbCards, TbChevronDown, TbChevronUp, TbGift, TbPokeball, TbSearch } from 'react-icons/tb'

export type IconName =
    | 'cards'
    | 'chevronUp'
    | 'chevronDown'
    | 'gift'
    | 'pokeball'
    | 'search'

interface IconProps extends SVGAttributes<SVGElement> {
    iconName: IconName
    size?: number | string
}

const iconMap: Record<IconName, IconType> = {
    cards: TbCards,
    chevronDown: TbChevronDown,
    chevronUp: TbChevronUp,
    gift: TbGift,
    pokeball: TbPokeball,
    search: TbSearch,
}

export default function Icon({ iconName, size = 20, ...props }: IconProps) {
    const IconComponent = iconMap[iconName] || null

    return IconComponent ? <IconComponent size={size} color="inherit" {...props} /> : null
}