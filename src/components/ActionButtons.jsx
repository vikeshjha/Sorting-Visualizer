export default function ActionButtons({
    sorting,
    paused,
    completed,
    startSorting,
    pauseSorting,
    generateRandomArray
  }) {
    return (
      <div className="flex gap-4 justify-center">
        {sorting && !paused ? (
          <button 
            onClick={pauseSorting}
            className="px-6 py-3 bg-gray-800 rounded flex items-center hover:bg-gray-700 min-w-32 justify-center"
          >
            <span className="mr-2">⏸</span> Pause
          </button>
        ) : (
          <button 
            onClick={startSorting}
            disabled={completed}
            className="px-20 border-2 border-gray-500  py-2.5 font-medium bg-black-50 hover:bg-gray-900 hover:text-white-600 text-white-500 rounded-sm text-sm transition duration-300"
          >
            <span className="mr-2">{paused ? "▶" : "▶"}</span> {paused ? "Resume" : "Play"}
          </button>
        )}
        
        <button 
          onClick={generateRandomArray}
          disabled={sorting && !paused}
          className="px-20 border-2 border-gray-500  py-2.5 font-medium bg-black-50 hover:bg-gray-900 hover:text-white-600 text-white-500 rounded-sm text-sm transition duration-300"
        >
          <span className="mr-2">↻</span> Reset
        </button>
      </div>
    );
  }

 