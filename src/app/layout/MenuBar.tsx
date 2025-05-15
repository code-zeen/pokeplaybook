import UserDropdownMenuAvatar from '@/app/layout/UserDropdownMenu/UserDropdownMenuAvatar.tsx'
import { SidebarTrigger } from '@/shared/ui/sidebar.tsx'

function MenuBar() {
    return (
        <div className="flex bg-white shadow-md z-50 sticky top-0">
            <div
                className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-2">
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