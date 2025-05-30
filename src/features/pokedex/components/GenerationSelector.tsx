import { useAppDispatch, useAppSelector } from '@/app/store/hooks.ts'
import { generations } from '@/features/pokedex/config/generationQuery.ts'
import { setGenerationIndex } from '@/features/pokedex/pokeSlice.ts'
import GenerationButton from './GenerationButton.tsx'

function GenerationSelector() {
    const { generationIndex } = useAppSelector(state => state.poke)
    const dispatch = useAppDispatch()

    const handleClick = (index: number) => {
        dispatch(setGenerationIndex(index))
    }

    return (
        <div className="flex gap-1 flex-wrap">
            {generations.map((each, index) => (
                <GenerationButton key={each.name} onClick={() => handleClick(index)}
                                  active={generationIndex === index}>{each.name}</GenerationButton>
            ))}
        </div>
    )
}

export default GenerationSelector