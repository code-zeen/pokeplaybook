import BackgroundArt from '@/features/pokemon-cards/components/booster/BackgroundArt.tsx'
import { useState } from 'react'

export default function PokemonBoosterPack() {
    const [ isHovering, setIsHovering ] = useState(false)

    return (
        <div className="flex justify-center items-center">
            <div
                className={`w-64 h-96 relative cursor-pointer transition-transform duration-300 ${isHovering ? 'transform -translate-y-2' : ''}`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className="h-8 bg-red-600"></div>
                <div className="h-1 bg-gray-50"></div>
                <BackgroundArt isHovering={isHovering} />
                <div className="h-0.5 bg-gray-50"></div>
                <div className="h-4 bg-red-600"></div>
            </div>
        </div>
    )
}