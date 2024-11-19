import { Input } from '@/components/ui/input.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';

function MenuBar() {
    return (
        <div className="top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
                <div className="text-xl font-bold"></div>

                <div className="flex-grow mx-8">
                    <Input
                        type="text"
                        name="pokemon"
                        placeholder="Search..."
                        className="w-full bg-gray-900 text-white border border-gray-700 focus:border-blue-500 rounded"
                    />
                </div>

                <div>
                    <Avatar className="bg-gray-900">
                        <AvatarImage src="/razz-berry.png" alt="User Avatar" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default MenuBar