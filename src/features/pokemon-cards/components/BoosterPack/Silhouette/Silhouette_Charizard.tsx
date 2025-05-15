export default function Silhouette_Charizard() {
    return (
        <div className="absolute bottom-8 right-8 w-24 h-24 opacity-50">
            {/* Simplified Charizard silhouette */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white bg-opacity-20"
                 style={{
                     clipPath: 'polygon(50% 0%, 80% 30%, 95% 20%, 70% 60%, 90% 90%, 50% 70%, 10% 90%, 30% 60%, 5% 20%, 20% 30%)'
                 }}>
            </div>
        </div>
    )
}