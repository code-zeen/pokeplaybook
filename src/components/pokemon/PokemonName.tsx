interface PokemonNameProps {
    name: string
}

function PokemonName({ name }: PokemonNameProps) {
    return (
        <b className="capitalize">{name}</b>
    )
}

export default PokemonName