interface PokemonImageProps {
    src: string
    name: string
}

function PokemonImage({ src, name }: PokemonImageProps) {
    return (
        <div className="flex justify-center mx-2 border border-gray-300 border-b-transparent">
            <img src={src} alt={name} />
        </div>
    )
}

export default PokemonImage