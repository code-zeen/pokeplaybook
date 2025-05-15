import UserDropdownMenu_Content from '@/app/layout/UserDropdownMenu/UserDropdownMenu_Content.tsx'
import UserDropdownMenuAvatar_Trigger from '@/app/layout/UserDropdownMenu/UserDropdownMenuAvatar_Trigger.tsx'
import { DropdownMenu } from '@/shared/ui/dropdown-menu.tsx'

export default function UserDropdownMenuAvatar() {
    return (
        <DropdownMenu>
            <UserDropdownMenuAvatar_Trigger />
            <UserDropdownMenu_Content />
        </DropdownMenu>
    )
}