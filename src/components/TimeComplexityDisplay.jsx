export default function TimeComplexityDisplay({ complexityData }) {
    return (
      <div className="flex gap-4">
        <button 
          className="inline-flex items-center px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
          onClick={() => {}}
        >
          <span className="mr-2">⏱</span> Time Complexity
          <span className="ml-2">→</span>
        </button>
        
        <div className="flex gap-2">
          <span className="px-3 py-1.5 bg-gray-800 rounded text-sm">
            Best: {complexityData?.best}
          </span>
          <span className="px-3 py-1.5 bg-gray-800 rounded text-sm">
            Average: {complexityData?.average}
          </span>
          <span className="px-3 py-1.5 bg-gray-800 rounded text-sm">
            Worst: {complexityData?.worst}
          </span>
        </div>
      </div>
    );
  }