import { Button } from '@/components/ui/button.tsx'
import { Volume2, VolumeX } from 'lucide-react'
import { useState } from 'react'

interface PokemonCryButtonProps {
    pokemonId?: number
    onError?: (error: Error) => void
}

function PokemonCryButton({ pokemonId, onError }: PokemonCryButtonProps) {
    const [ isPlaying, setIsPlaying ] = useState(false)
    const [ isError, setIsError ] = useState(false)

    const playPokemonCry = async () => {
        if (!pokemonId) return

        const audioUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`

        try {
            const audio = new Audio(audioUrl)

            audio.addEventListener('play', () => setIsPlaying(true))
            audio.addEventListener('ended', () => setIsPlaying(false))
            audio.addEventListener('error', () => {
                setIsError(true)
                setIsPlaying(false)
            })

            await audio.play()
            setIsError(false)
        } catch (error) {
            setIsError(true)
            setIsPlaying(false)

            if (onError && error instanceof Error) {
                onError(error)
            }

            console.error('Error playing Pokemon cry:', error)
        }
    }

    return (
        <Button
            onClick={playPokemonCry}
            disabled={!pokemonId || isPlaying}
            variant={isError ? 'destructive' : 'outline'}
            size="icon"
        >
            {isError ? <VolumeX /> : <Volume2 />}
        </Button>
    )
}

export default PokemonCryButton