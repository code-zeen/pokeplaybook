import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/shared/ui/sidebar.tsx'
import { Link } from 'react-router-dom'

const menuItems = [
    { title: 'Pokedex', url: '/pokedex' },
    { title: 'Cards', url: '/pokemon-cards' }
]

function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Pokemon</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((each) => (
                                <SidebarMenuItem key={each.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={each.url}>
                                            <span>{each.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar