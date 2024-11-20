import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu.tsx'
import { SidebarTrigger } from '@/components/ui/sidebar.tsx'

interface MenuBarProps {

}

function MenuBar() {
    return (
        <div className="top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
                <div className="flex items-center gap-2">
                    <SidebarTrigger />
                    <h1 className="text-xl font-bold">Bareruya</h1>
                </div>

                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="/razz-berry.png" alt="User Avatar" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="bg-gray-900 text-white">
                            <DropdownMenuItem>
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}

export default MenuBar