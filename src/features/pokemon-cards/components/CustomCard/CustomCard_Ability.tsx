interface PokemonAbilityProps {
    name: string
    text: string
}

function CustomCard_Ability({ name, text }: PokemonAbilityProps) {
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-[2.5fr,6.5fr] items-center">
                <div
                    className="flex border border-gray-300 bg-white rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg px-0.5 mr-1">
                    <div
                        className="flex justify-center items-center bg-rose-500 rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg p-[1px] leading-none w-full pl-1 pr-2.5 py-1"
                    >
                        <b className="text-[10px] text-white italic leading-none">
                            Ability
                        </b>
                    </div>
                </div>
                <span className="capitalize text-rose-800"><b>{name}</b></span>
            </div>
            <p className="text-[11px] leading-tight overflow-hidden text-ellipsis line-clamp-2">{text}</p>
        </div>
    )
}

export default CustomCard_Ability