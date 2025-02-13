import { useAppDispatch } from '@/app/store/hooks.ts'
import { setSearchKeyword } from '@/features/pokedex/pokedexSlice.ts'
import { Button } from '@/shared/ui/button.tsx'
import { Input } from '@/shared/ui/input.tsx'
import { KeyboardEvent, useState } from 'react'

function Search() {
    const [ input, setInput ] = useState<string>('')
    const dispatch = useAppDispatch()

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