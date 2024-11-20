import { SidebarProvider } from '@/components/ui/sidebar.tsx';
import AppSidebar from '@/components/layout/AppSidebar.tsx';
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                {children}
            </main>
        </SidebarProvider>
    )
}

export default Layout