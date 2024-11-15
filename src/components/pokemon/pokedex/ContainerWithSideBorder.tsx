import { ReactNode } from "react";

function ContainerWithSideBorder({ children }: { children: ReactNode }) {
    return (
        <div className="flex border-2 border-black h-10 rounded overflow-hidden">
            <div className="bg-red-500 p-1" />
            <div className="flex justify-center items-center border-x-4 border-y-2 border-red-300 bg-white w-full">
                {children}
            </div>
            <div className="bg-red-500 p-1" />
        </div>
    )
}

export default ContainerWithSideBorder