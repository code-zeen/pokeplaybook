import UserDropdownMenuUsername from '@/app/layout/UserDropdownMenu/UserDropdownMenuUsername.tsx'
import { SidebarFooter, SidebarMenu, SidebarMenuItem } from '@/shared/ui/sidebar.tsx'

export default function AppSidebar_Footer() {
    return (
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <UserDropdownMenuUsername />
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    )
}