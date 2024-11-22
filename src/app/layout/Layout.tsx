import AppSidebar from '@/app/layout/AppSidebar.tsx'
import MenuBar from '@/app/layout/MenuBar.tsx'
import { SidebarProvider } from '@/shared/ui/sidebar.tsx'
import { Toaster } from '@/shared/ui/toaster.tsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <MenuBar />
                <Outlet />
                <Toaster />
            </main>
        </SidebarProvider>
    )
}

export default Layout