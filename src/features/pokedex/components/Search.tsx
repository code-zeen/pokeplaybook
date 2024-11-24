import { Input } from "@/shared/ui/input.tsx";
import { Button } from "@/shared/ui/button.tsx";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { fetchPokedexEntryByNameOrId, setSearchKeyword } from "@/features/pokedex/pokedexSlice.ts";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks.ts";

function Search() {
    const [ input, setInput ] = useState<string>('')
    const { searchKeyword } = useAppSelector(state => state.pokedex)
    const dispatch = useAppDispatch()
    const prevSearchKeyword = useRef(searchKeyword)

    useEffect(() => {
        if (searchKeyword && searchKeyword !== prevSearchKeyword.current) {
            dispatch(fetchPokedexEntryByNameOrId(searchKeyword))
        }
        prevSearchKeyword.current = searchKeyword
    }, [ dispatch, searchKeyword ])

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleSearch()
        }
    }

    const handleSearch = () => {
        if (input) {
            dispatch(setSearchKeyword(input))
        }
    }

    return (
        <div className="flex w-full max-w-sm gap-1">
            <Input
                type="text"
                name="pokemon"
                placeholder="Search..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button onClick={handleSearch}>Search</Button>
        </div>
    )
}

export default Search