import SelectedDun from "./SelectedDuns"



interface DunsComponetProps {
    setActiveDun: any,
    activeDun: any
    currentDun: any
    duns: any
}

const DunsComponent = ({ activeDun, setActiveDun, currentDun, duns }: DunsComponetProps) => {
    return (
        <section className="md:w-full max-w-4xl h-[1050px] bg-[#111] shadow-lg rounded-lg p-5">

            <header className="mb-8 text-center">
                <h3 className="text-5xl font-bold text-gray-300 mb-2">Join Our Dunes</h3>
                <p className="text-gray-600">Explore the different dunes and their rewards.</p>
            </header>

            {/* Slider Navigation */}
            <div className="flex justify-center gap-4 mb-6">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    onClick={() => setActiveDun(1)}
                >
                    Dun 1
                </button>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    onClick={() => setActiveDun(2)}
                >
                    Dun 2
                </button>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    onClick={() => setActiveDun(3)}
                >
                    Dun 3
                </button>
            </div>

            {/* Duns Content */}
            <SelectedDun activeDun={currentDun} duns={duns} setActiveDun={setActiveDun} />

        </section>
    )
}

export default DunsComponent