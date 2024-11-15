interface PokemonAbilityProps {
  name: string
  flavorText: string
}

function PokemonAbility({ name, flavorText }: PokemonAbilityProps) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-1">
        <div className=" border-2 border-gray-200 bg-rose-500 rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg pl-2 pr-4 text-white text-sm">Ability</div>
        <span className="capitalize text-rose-500"><b>{name}</b></span>
      </div>
      <p className="text-sm">{flavorText}</p>
    </div>
  )
}

export default PokemonAbility