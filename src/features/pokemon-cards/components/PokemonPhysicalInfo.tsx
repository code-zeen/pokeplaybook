interface PokemonPhysicalInfoProps {
    number: string
}

function PokemonPhysicalInfo({ number }: PokemonPhysicalInfoProps) {
    return (
        <div
            className="flex flex-col pl-1 pr-3 bg-gray-400 rounded-tl-xl rounded-bl-lg rounded-br-3xl border border-gray-500">
            <div
                className="flex justify-center gap-2 text-xs bg-gray-100 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-lg border border-gray-300">
                <span>NO. {number}</span>
            </div>
        </div>
    )
}

export default PokemonPhysicalInfo