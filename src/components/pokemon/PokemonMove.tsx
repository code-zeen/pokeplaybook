interface PokemonMoveProps {
    name: string
    power: number
    flavorText: string
}

function PokemonMove({ name, power, flavorText }: PokemonMoveProps) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <span className="capitalize"><b>{name}</b></span>
                </div>
                <span>{power}</span>
            </div>
            <p className="text-xs">{flavorText}</p>
        </div>
    )
}

export default PokemonMove