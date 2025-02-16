interface PokemonPhysicalInfoProps {
    number: string
}

function PokemonPhysicalInfo({ number }: PokemonPhysicalInfoProps) {
    return (
        <div
            className="flex flex-col pl-1 pr-3 bg-gray-400 rounded-tl-xl rounded-bl-lg rounded-br-3xl border border-gray-500 shadow-[1px_1px_1px_rgba(0,0,0,0.25)]">
            <div
                className="flex justify-center gap-2  bg-gradient-to-b from-gray-300 via-gray-50 to-gray-300 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-lg border border-gray-300">
                <span className="text-[8px] text-gray-800">NO. {number}</span>
            </div>
        </div>
    )
}

export default PokemonPhysicalInfo