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
                <div className="bg-[url('/bg.png')] bg-black bg-opacity-20 bg-blend-overlay bg-repeat h-screen w-full">
                    <Outlet />
                </div>
                <Toaster />
            </main>
        </SidebarProvider>
    )
}

export default Layout