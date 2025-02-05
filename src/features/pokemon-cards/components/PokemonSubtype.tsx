export default function PokemonSubtype({ subtype }: { subtype: string }) {
    return (
        <div
            className="flex justify-center items-center px-1 shadow-[2px_1px_2px_rgba(0,0,0,0.25)] rounded-l-2xl rounded-tr-sm rounded-br-3xl bg-gradient-to-b from-gray-300 via-gray-100 to-gray-400">
            <span
                className="leading-none uppercase italic font-bold text-[10px] text-gray-500 py-0.5 pr-0.5">{subtype}</span>
        </div>
    )
}