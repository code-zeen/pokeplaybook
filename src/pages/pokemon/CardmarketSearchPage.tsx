import { setSearchKeyword } from '@/features/pokemon-cards/pokemontcgSlice.ts'
import Search from '@/shared/components/Search.tsx'

export default function CardmarketSearchPage() {
    return (
        <div className="flex justify-center bg-gray-100 p-1">
            <Search setSearchKeyword={setSearchKeyword} />
        </div>
    )
}