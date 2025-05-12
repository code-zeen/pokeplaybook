import PokemonBoosterPack from '@/features/pokemon-cards/components/booster/PokemonBoosterPack.tsx'

export default function PokemonBoosterAnimator() {

    return (
        <div className="flex justify-center items-center">
            <div className="w-64 h-96 relative">
                <PokemonBoosterPack />
            </div>
        </div>
    )
}