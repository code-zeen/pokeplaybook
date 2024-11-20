import Layout from '@/components/layout/Layout.tsx';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import PokemonCard from '@/components/pokemon/pokemon-card/PokemonCard.tsx'
import PokedexPage from '@/pages/pokemon/pokedex/PokedexPage.tsx'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'pokedex',
                element: <PokedexPage />,
            }, {
                path: 'cards',
                element: <PokemonCard />,
            }
        ]
    }
]

const router = createBrowserRouter(routes);

export default router