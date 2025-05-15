import CardmarketSearchPage from '@/pages/pokemon/CardmarketSearchPage.tsx'
import PokedexPage from '@/pages/pokemon/PokedexPage.tsx'
import PokemonCardPage from '@/pages/pokemon/PokemonCardPage.tsx'
import Icon from '@/shared/components/Icon.tsx'
import { ReactElement } from 'react'
import { RouteObject } from 'react-router-dom'

export type MenuItem = {
    label: string
    icon?: ReactElement,
    children?: MenuItem[]
} & RouteObject

export const menuItems: MenuItem[] = [
    {
        label: 'Pokedex',
        path: '/pokedex',
        element: <PokedexPage />,
        icon: <Icon iconName="pokeball" />,
    },
    {
        label: 'Pokemon Cards',
        path: '/pokemon-cards',
        icon: <Icon iconName="cards" />,
        children: [
            {
                label: 'Search',
                path: 'search',
                element: <CardmarketSearchPage />,
                icon: <Icon iconName="search" />,
            },
            {
                label: 'Open Booster',
                path: 'open',
                element: <PokemonCardPage />,
                icon: <Icon iconName="gift" />,
            }
        ]
    },
]