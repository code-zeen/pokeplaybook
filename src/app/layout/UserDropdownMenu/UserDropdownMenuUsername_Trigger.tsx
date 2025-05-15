import Icon from '@/shared/components/Icon.tsx'
import { DropdownMenuTrigger } from '@/shared/ui/dropdown-menu.tsx'
import { SidebarMenuButton } from '@/shared/ui/sidebar.tsx'

export default function UserDropdownMenuUsername_Trigger() {
    return (
        <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
                username
                <Icon iconName="chevronUp" className="ml-auto" />
            </SidebarMenuButton>
        </DropdownMenuTrigger>
    )
}