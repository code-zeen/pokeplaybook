import ContainerWithSideBorder from './ContainerWithSideBorder'

interface PokemonNameProps {
    name: string
}

function PokemonName({ name }: PokemonNameProps) {
    return (
        <ContainerWithSideBorder>
            <span className="capitalize">{name}</span>
        </ContainerWithSideBorder>
    )
}

export default PokemonName