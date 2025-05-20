export default function ArraySizeSelector({
  arraySize,
  setArraySizePreset,
  sorting,
  paused
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-4 font-medium ">
        <span>Array Size</span>
        <span className="ml-1 text-gray-500 text-xs">ⓘ</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button 
          className={`py-2 px-4 font-medium rounded text-center ${arraySize === 5 ? 'bg-gray-700' : 'bg-gray-900 border border-gray-700'}`}
          onClick={() => setArraySizePreset('small')}
          disabled={sorting && !paused}
        >
          Small
        </button>
        <button 
          className={`py-2 px-4 font-medium rounded text-center ${arraySize === 15 ? 'bg-gray-700' : 'bg-gray-900 border border-gray-700'}`}
          onClick={() => setArraySizePreset('medium')}
          disabled={sorting && !paused}
        >
          Medium
        </button>
        <button 
          className={`py-2 px-4 font-medium rounded text-center ${arraySize === 25 ? 'bg-gray-700' : 'bg-gray-900 border border-gray-700'}`}
          onClick={() => setArraySizePreset('large')}
          disabled={sorting && !paused}
        >
          Large
        </button>
        <button 
          className={`py-2 px-4 font-medium rounded text-center ${arraySize === 35 ? 'bg-gray-700' : 'bg-gray-900 border border-gray-700'}`}
          onClick={() => setArraySizePreset('xl')}
          disabled={sorting && !paused}
        >
          XL
        </button>
      </div>
    </div>
  );
}