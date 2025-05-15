import UserDropdownMenu_Content from '@/app/layout/UserDropdownMenu/UserDropdownMenu_Content.tsx'
import UserDropdownMenuUsername_Trigger from '@/app/layout/UserDropdownMenu/UserDropdownMenuUsername_Trigger.tsx'
import { DropdownMenu } from '@/shared/ui/dropdown-menu.tsx'

export default function UserDropdownMenuUsername() {
    return (
        <DropdownMenu>
            <UserDropdownMenuUsername_Trigger />
            <UserDropdownMenu_Content />
        </DropdownMenu>
    )
}