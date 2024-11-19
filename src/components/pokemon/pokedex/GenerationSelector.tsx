import { generations } from './generationQuery.ts';
import GenerationButton from './GenerationButton.tsx';

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
                <GenerationButton onClick={() => handleClick(index)}
                                  active={selectedGenerationIndex === index}>{each.name}</GenerationButton>
            ))}
        </div>
    )
}

export default GenerationSelector