import CardProbabilityInfo from '@/features/pokemon-cards/components/booster/CardProbabilityInfo.tsx'
import Pokeball from '@/features/pokemon-cards/components/booster/Pokeball.tsx'
import CharizardSilhouette
    from '@/features/pokemon-cards/components/booster/pokemon-silhouettes/CharizardSilhouette.tsx'
import PokemonLogo from '@/features/pokemon-cards/components/booster/PokemonLogo.tsx'

interface BackgroundArtProps {
    isHovering: boolean
}

export default function BackgroundArt({ isHovering }: BackgroundArtProps) {
    return (
        <div
            className={`w-full h-full bg-gradient-to-br from-red-600 to-orange-500 overflow-hidden relative ${isHovering ? 'shadow-xl' : 'shadow-lg'}`}>
            <PokemonLogo />

            <Pokeball />

            <CharizardSilhouette />

            <CardProbabilityInfo total={7} rare={1} />

            {/* Energy symbols scattered around */}
            <div className="absolute top-24 left-8 w-5 h-5 rounded-full bg-yellow-400" style={{
                boxShadow: '0 0 10px rgba(255,230,0,0.7)'
            }}></div>
            <div className="absolute top-36 right-5 w-4 h-4 rounded-full bg-blue-500" style={{
                boxShadow: '0 0 10px rgba(52,152,219,0.7)'
            }}></div>
            <div className="absolute bottom-32 left-10 w-4 h-4 rounded-full bg-green-500" style={{
                boxShadow: '0 0 10px rgba(46,204,113,0.7)'
            }}></div>
        </div>
    )
}