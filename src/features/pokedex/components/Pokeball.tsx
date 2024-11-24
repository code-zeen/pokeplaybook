function Pokeball() {
    return (
        <>
            <div
                className="w-5 h-2.5 border-2 border-black bg-red-500 rounded-t-full transform"
                style={{ transform: 'translateY(1px)' }}>
            </div>
            <div
                className="w-5 h-2.5 border-2 border-black bg-white rounded-b-full transform"
                style={{ transform: 'translateY(-1px)' }}>
            </div>
            <div className="bg-white w-2 h-2 rounded-full absolute border-2 border-black"></div>
        </>
    )
}

export default Pokeball