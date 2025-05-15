import { IconType } from 'react-icons'
import { TbCards, TbGift, TbPokeball, TbSearch } from 'react-icons/tb'

export type IconName =
    | 'cards'
    | 'gift'
    | 'pokeball'
    | 'search'

interface IconProps {
    iconName: IconName
    size?: number | string
}

const iconMap: Record<IconName, IconType> = {
    cards: TbCards,
    gift: TbGift,
    pokeball: TbPokeball,
    search: TbSearch,
}

export default function Icon({ iconName, size = 20, ...props }: IconProps) {
    const IconComponent = iconMap[iconName] || null

    return IconComponent ? <IconComponent size={size} color="inherit" {...props} /> : null
}