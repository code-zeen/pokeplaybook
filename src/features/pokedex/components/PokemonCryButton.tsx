import { Button } from '@/shared/ui/button.tsx'
import { Loader2, Volume2, VolumeX } from 'lucide-react'
import { useRef, useState } from 'react'

interface PokemonCryButtonProps {
    pokemonId?: number
}

function PokemonCryButton({ pokemonId }: PokemonCryButtonProps) {
    const [ isPlaying, setIsPlaying ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ isError, setIsError ] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const audioUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`

    const handleClick = () => {
        if (audioRef.current) {
            setIsPlaying(true)
            audioRef.current
                .play()
                .catch((error) => {
                    console.log(
                        'Error playing audio',
                        JSON.stringify(error, null, 2))
                    setIsError(true)
                    setIsLoading(false)
                })
        }
    }

    return pokemonId ? (
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
            <audio
                ref={audioRef}
                src={audioUrl}
                preload="auto"
                onLoadedMetadata={() => {
                    console.log('Loaded metadata')
                    if (audioRef.current) {
                        audioRef.current.volume = 0.1
                    }
                    setIsLoading(false)
                }}
                onEnded={() => {
                    setIsPlaying(false)
                    console.log('Audio ended')
                }}
                onLoadStart={() => {
                    setIsLoading(true)
                    console.log('Loading started')
                }}
                onCanPlay={() => {
                    console.log('Can play')
                    setIsLoading(false)
                }}
                onError={(event) => {
                    console.error('Error loading audio', JSON.stringify(event, null, 2))
                    // const audioElement = event.target
                    // if (audioElement.error) {
                    //     console.error('Audio Error Code:', audioElement.error.code) // Numeric error code
                    //     console.error('Audio Error Message:', audioElement.error.message) // (Optional, some browsers)
                    // }
                    setIsError(true)
                    setIsLoading(false)
                }}
            />
        </Button>
    ) : (
        <Button disabled variant="outline" size="icon">
            <Volume2 />
        </Button>
    )
}

export default PokemonCryButton