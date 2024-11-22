import { Button } from '@/components/ui/button.tsx'
import { Loader2, Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface PokemonCryButtonProps {
    pokemonId?: number
    onError?: (error: Error) => void
}

function PokemonCryButton({ pokemonId, onError }: PokemonCryButtonProps) {
    const [ isPlaying, setIsPlaying ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ isError, setIsError ] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
        }
    }, [ pokemonId ])

    const initializeAudio = async () => {
        if (!pokemonId) return

        setIsLoading(true)
        setIsError(false)

        const audioUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`

        try {
            const audio = new Audio()

            audio.addEventListener('play', () => setIsPlaying(true))
            audio.addEventListener('ended', () => {
                setIsPlaying(false)
                setIsLoading(false)
            })
            audio.addEventListener('error', () => {
                setIsPlaying(false)
                setIsLoading(false)
                setIsError(true)
            })

            audio.preload = 'auto'
            audio.src = audioUrl

            await new Promise((resolve, reject) => {
                audio.addEventListener('canplaythrough', resolve, { once: true })
                audio.addEventListener('error', reject, { once: true })
                audio.load()
            })

            audioRef.current = audio
            setIsLoading(false)

            await audio.play()
        } catch (error) {
            setIsPlaying(false)
            setIsLoading(false)
            setIsError(true)

            if (onError && error instanceof Error) {
                onError(error)
            }

            alert(JSON.stringify(error, null, 2))
        }
    }

    const handleClick = async () => {
        if (isPlaying && audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
            setIsPlaying(false)
            return
        }
        await initializeAudio()
    }

    return (
        <Button
            onClick={handleClick}
            disabled={!pokemonId || isPlaying}
            variant={isError ? 'destructive' : 'outline'}
            size="icon"
        >
            {isLoading ? (
                <Loader2 className="animate-spin" />
            ) : isError ? (
                <VolumeX />
            ) : isPlaying ? (
                <Volume2 className="text-primary" />
            ) : (
                <Volume2 />
            )}
        </Button>
    )
}

export default PokemonCryButton