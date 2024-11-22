import AppSidebar from '@/app/layout/AppSidebar.tsx'
import MenuBar from '@/app/layout/MenuBar.tsx'
import { SidebarProvider } from '@/shared/ui/sidebar.tsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <MenuBar />
                <Outlet />
            </main>
        </SidebarProvider>
    )
}

export default Layout