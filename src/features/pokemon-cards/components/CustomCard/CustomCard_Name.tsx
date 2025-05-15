interface PokemonNameProps {
    name: string
}

function CustomCard_Name({ name }: PokemonNameProps) {
    return (
        <b className="capitalize">{name}</b>
    )
}

export default CustomCard_Name