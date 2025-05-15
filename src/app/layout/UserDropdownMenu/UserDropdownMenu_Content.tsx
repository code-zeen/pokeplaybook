import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/shared/ui/dropdown-menu.tsx'

export default function UserDropdownMenu_Content() {
    return (
        <DropdownMenuContent side="top">
            <DropdownMenuItem>
                <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <span>Log out</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    )
}