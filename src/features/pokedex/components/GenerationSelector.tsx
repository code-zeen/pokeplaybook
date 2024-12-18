import GenerationButton from './GenerationButton.tsx'
import { generations } from '@/entities/pokemon/fetch/generationQuery.ts'
import { useAppDispatch, useAppSelector } from "@/app/store/hooks.ts";
import { fetchPokedexListbyGenerationIndex, setGenerationIndex } from "@/features/pokedex/pokedexSlice.ts";
import { useEffect } from "react";

function GenerationSelector() {
    const { pokedexList, generationIndex } = useAppSelector(state => state.pokedex)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (pokedexList.length > 0) return
        dispatch(fetchPokedexListbyGenerationIndex(generationIndex))
    }, [ dispatch, generationIndex ]);

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