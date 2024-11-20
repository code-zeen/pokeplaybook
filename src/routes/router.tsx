import Layout from '@/components/layout/Layout.tsx'
import PokedexPage from '@/pages/pokemon/PokedexPage.tsx'
import PokemonCardPage from '@/pages/pokemon/PokemonCardPage.tsx'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'pokedex',
                element: <PokedexPage />,
                index: true,
            }, {
                path: 'pokemon-cards',
                element: <PokemonCardPage />,
            }
        ]
    }
]

const router = createBrowserRouter(routes)

export default router