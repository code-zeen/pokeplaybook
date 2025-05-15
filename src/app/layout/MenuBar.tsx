import UserDropdownMenuAvatar from '@/app/layout/UserDropdownMenu/UserDropdownMenuAvatar.tsx'
import { SidebarTrigger } from '@/shared/ui/sidebar.tsx'

function MenuBar() {
    return (
        <div className="top-0 left-0 w-full shadow-md z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
                <div className="flex items-center gap-2">
                    <SidebarTrigger />
                    <h1 className="text-xl font-bold">PokePlaybook</h1>
                </div>

                <UserDropdownMenuAvatar />
            </div>
        </div>
    )
}

export default MenuBar