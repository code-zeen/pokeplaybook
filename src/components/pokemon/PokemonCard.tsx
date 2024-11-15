import { useEffect, useState } from 'react'

function PokemonCard() {
  const [pokemon, setPokemon] = useState()
  useEffect(() => {
    (async () => {
      await fetchPokemonByName('ditto')
    })()
  }, [])

  const fetchPokemonByName = async (name: string) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await res.json()

    setPokemon(data)
  }


  return (
    <div>
      {pokemon?.name}
    </div>
  )
}

export default PokemonCard