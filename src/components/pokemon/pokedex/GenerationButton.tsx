import { ReactNode } from 'react';

interface GenerationButtonProps {
    children: ReactNode
    onClick: () => void;
    active?: boolean
}

function GenerationButton({ children, onClick, active }: GenerationButtonProps) {
    return (
        <button onClick={onClick}
                className="flex justify-center items-center border-2 border-black rounded overflow-hidden w-8">
            <div className={`flex w-full border-x-2 ${active ? 'border-red-500' : 'border-transparent'}`}>
                <div
                    className={`flex justify-center items-center border-x-4 border-y-2 ${active ? 'border-red-300' : 'border-transparent'} bg-white w-full`}>
                    {children}
                </div>
            </div>
        </button>
    )
}

export default GenerationButton