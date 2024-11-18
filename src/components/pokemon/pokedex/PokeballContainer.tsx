import { ReactNode } from 'react';

function PokeballContainer({ children }: { children: ReactNode }) {
    return (
        <div
            className="flex flex-col relative justify-center items-center rounded-full bg-white w-6 h-6">
            {children}
        </div>
    )
}

export default PokeballContainer