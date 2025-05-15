interface CardProbabiltyInfoProps {
    total: number
    rare: number
}

export default function BoosterPack_Rarity({ total, rare }: CardProbabiltyInfoProps) {
    return (
        <div className="absolute bottom-5 left-5 text-white" style={{
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
        }}>
            <div className="text-sm">{total} CARDS</div>
            <div className="text-xs opacity-80">{rare} RARE GUARANTEED</div>
        </div>
    )
}