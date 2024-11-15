interface PokemonHpProps {
  hp: number
}

function PokemonHp({ hp }: PokemonHpProps) {
  return (
    <span>HP {hp}</span>
  )
}

export default PokemonHp