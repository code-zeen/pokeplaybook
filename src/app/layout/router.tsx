import Layout from '@/app/layout/Layout.tsx'
import { MenuItem, menuItems } from '@/app/layout/menuItems.tsx'
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'

function buildRoutes(menuItems: MenuItem[]) {
    return menuItems.map(item => {
        const route: RouteObject = {
            path: item.path,
            element: item.element,
        }

        if (item.children && item.children.length > 0) {
            route.children = [
                {
                    index: true,
                    element: <Navigate to={item.children[0].path!} replace />
                },
                ...item.children.map(child => ({
                    path: child.path,
                    element: child.element,
                }))
            ]
        }

        return route
    })
}

const routes: RouteObject[] = [ {
    path: '/',
    element: <Layout />,
    children: [
        { index: true, element: <Navigate to="pokedex" replace />, },
        ...buildRoutes(menuItems),
    ],
} ]

const router = createBrowserRouter(routes)

export default router