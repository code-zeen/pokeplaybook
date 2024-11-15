interface PokemonHpProps {
  hp: number
}

function PokemonHp({ hp }: PokemonHpProps) {
  return (
      <div className="flex items-baseline gap-0.5">
        <span className="text-xs">HP</span>
        <span><b>{hp}</b></span>
      </div>
  )
}

export default PokemonHp