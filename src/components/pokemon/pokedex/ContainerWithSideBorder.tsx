import { ReactNode } from "react";

function ContainerWithSideBorder({ children }: { children: ReactNode }) {
    return (
        <div className="flex border-2 border-black h-10">
            <div className="bg-red-500 p-1" />
            <div className="flex items-center border-x-4 border-y-2 border-red-300">
                {children}
            </div>
            <div className="bg-red-500 p-1" />
        </div>
    )
}

export default ContainerWithSideBorder