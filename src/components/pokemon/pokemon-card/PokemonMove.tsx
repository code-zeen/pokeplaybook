import TypeIcon from "../TypeIcon";
import { TypeEnum } from "../../../enum/pokemonEnum";

interface PokemonMoveProps {
    name: string
    power: number | null
    type: TypeEnum
    flavorText: string
}

function PokemonMove({ name, power, type, flavorText }: PokemonMoveProps) {
    return (
        <div className="flex flex-col">
            <div className="flex items-center">
                <div className="flex w-1/4">
                    <TypeIcon type={type} />
                </div>
                <div className="flex w-3/4 justify-between">
                    <span className="capitalize"><b>{name}</b></span>
                    <span><b>{power}</b></span>
                </div>
            </div>
            <p className="text-xs">{flavorText}</p>
        </div>
    )
}

export default PokemonMove