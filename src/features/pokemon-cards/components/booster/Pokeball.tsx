export default function Pokeball() {
    return (
        <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
            <div
                className="w-36 h-36 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border-8 border-gray-800 shadow-inner overflow-hidden relative"
            >
                <div
                    className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-red-500 to-red-600 border-b-4 border-gray-800"></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-gray-800 z-10"
                ></div>
            </div>
        </div>
    )
}