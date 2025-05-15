import AppSidebar_Footer from '@/app/layout/AppSidebar/AppSidebar_Footer.tsx'
import { menuItems } from '@/app/layout/menuItems.tsx'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem
} from '@/shared/ui/sidebar.tsx'
import { Link } from 'react-router-dom'

function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Pokemon</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.label}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.path!}>
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                    {item.children?.map(subItem => (
                                        <SidebarMenuSub key={subItem.label}>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild>
                                                    <Link to={`${item.path!}/${subItem.path!}`}>
                                                        {subItem.icon}
                                                        <span>{subItem.label}</span>
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    ))}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <AppSidebar_Footer />
        </Sidebar>
    )
}

export default AppSidebar
