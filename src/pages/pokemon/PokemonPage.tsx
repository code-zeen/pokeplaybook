import PokedexPage from '@/pages/pokemon/pokedex/PokedexPage.tsx'

function PokemonPage() {
    return (
        <div className="flex flex-col items-center p-4 gap-4">
            <div className="flex gap-4">
                {/*<MenuBar handleKeyDown={handleKeyDown} />*/}
                <PokedexPage />
            </div>
        </div>
    )
}

export default PokedexPage