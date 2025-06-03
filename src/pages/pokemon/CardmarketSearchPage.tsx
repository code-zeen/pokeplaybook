import Cardmarket from '@/features/pokemon-cards/components/Cardmarket/Cardmarket.tsx'
import { setSearchKeyword } from '@/features/pokemon-cards/pokemontcgSlice.ts'
import Search from '@/shared/components/Search.tsx'
import AdvancedSearch from '@/features/pokemon-cards/components/AdvancedSearch/AdvancedSearch.tsx'

export default function CardmarketSearchPage() {

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-gray-100 p-1 sticky top-0">
                <Search setSearchKeyword={setSearchKeyword} />
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 p-1 sticky top-0">
                <AdvancedSearch />
            </div>
            <Cardmarket />
        </>
    )
}