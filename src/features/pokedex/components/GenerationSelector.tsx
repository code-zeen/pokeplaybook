import GenerationButton from './GenerationButton.tsx'
import { generations } from '../../../entities/pokemon/fetch/generationQuery.ts'

interface GenerationSelectorProps {
    selectedGenerationIndex: number
    setSelectedGenerationIndex: (index: number) => void;
}

function GenerationSelector({ selectedGenerationIndex, setSelectedGenerationIndex }: GenerationSelectorProps) {
    const handleClick = (index: number) => {
        setSelectedGenerationIndex(index)
    }

    return (
        <div className="flex gap-1 flex-wrap">
            {generations.map((each, index) => (
                <GenerationButton key={each.name} onClick={() => handleClick(index)}
                                  active={selectedGenerationIndex === index}>{each.name}</GenerationButton>
            ))}
        </div>
    )
}

export default GenerationSelector