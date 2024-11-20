import Layout from '@/components/layout/Layout.tsx';
import PokedexPage from '@/pages/pokemon/pokedex/PokedexPage.tsx';
import PokemonPage from '@/pages/pokemon/PokemonPage.tsx';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'pokemon',
                element: <PokemonPage />,
                children: [
                    {
                        path: 'pokedex',
                        element: <PokedexPage />
                    }
                ]
            }
        ]
    }
]

const router = createBrowserRouter(routes);

export default router