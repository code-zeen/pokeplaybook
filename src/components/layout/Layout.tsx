import AppSidebar from '@/components/layout/AppSidebar.tsx'
import MenuBar from '@/components/layout/MenuBar.tsx'
import { SidebarProvider } from '@/components/ui/sidebar.tsx'
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