interface PokemonAbilityProps {
    name: string
    flavorText: string
}

function PokemonAbility({ name, flavorText }: PokemonAbilityProps) {
    return (
        <div className="flex flex-col">
            <div className="flex gap-1">
                <div
                    className="border border-gray-400 rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg px-0.5">
                    <div className="bg-rose-500 rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg pl-2 pr-4">
                        <b className="text-xs  text-white italic">Ability</b>
                    </div>
                </div>
                <span className="capitalize text-rose-500"><b>{name}</b></span>
            </div>
            <p className="text-xs">{flavorText}</p>
        </div>
    )
}

export default PokemonAbility