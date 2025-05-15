import BoosterPack_Pokeball from '@/features/pokemon-cards/components/BoosterPack/BoosterPack_Pokeball.tsx'
import BoosterPack_PokemonLogo from '@/features/pokemon-cards/components/BoosterPack/BoosterPack_PokemonLogo.tsx'
import BoosterPack_Rarity from '@/features/pokemon-cards/components/BoosterPack/BoosterPack_Rarity.tsx'
import Silhouette_Charizard from '@/features/pokemon-cards/components/BoosterPack/Silhouette/Silhouette_Charizard.tsx'


export default function BoosterPack_BackgroundArt() {
    return (
        <div
            className="w-full h-96 bg-gradient-to-br from-red-600 to-orange-500 overflow-hidden relative">
            <BoosterPack_PokemonLogo />

            <BoosterPack_Pokeball />

            <Silhouette_Charizard />

            <BoosterPack_Rarity total={7} rare={1} />

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