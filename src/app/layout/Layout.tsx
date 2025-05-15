import AppSidebar from '@/app/layout/AppSidebar/AppSidebar.tsx'
import MenuBar from '@/app/layout/MenuBar.tsx'
import { SidebarProvider } from '@/shared/ui/sidebar.tsx'
import { Toaster } from '@/shared/ui/toaster.tsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main
                className="bg-[url('/bg.png')] bg-black bg-opacity-20 bg-blend-overlay bg-repeat w-full"
            >
                <MenuBar />
                <Outlet />
                <Toaster />
            </main>
        </SidebarProvider>
    )
}

export default Layout