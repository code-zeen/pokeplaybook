import { generations } from './generationQuery.ts';
import GenerationButton from './GenerationButton.tsx';

function GenerationSelector() {
    const handleClick = () => {

    }

    return (
        <div className="flex gap-1 flex-wrap">
            {generations.map(each => (
                <GenerationButton onClick={handleClick}>{each.name}</GenerationButton>
            ))}
        </div>
    )
}

export default GenerationSelector