interface PokemonImageProps {
  src: string
  name: string
}

function PokemonImage({ src, name }: PokemonImageProps) {
  return (
    <div className="flex justify-center border">
      <img src={src} alt={name} />
    </div>
  )
}

export default PokemonImage