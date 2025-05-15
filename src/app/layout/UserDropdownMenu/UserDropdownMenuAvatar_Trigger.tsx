import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar.tsx'
import { DropdownMenuTrigger } from '@/shared/ui/dropdown-menu.tsx'

export default function UserDropdownMenuAvatar_Trigger() {
    return (
        <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage src="/razz-berry.png" alt="User Avatar" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
    )
}