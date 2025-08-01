import ArraySizeSelector from './ArraySizeSelector';

import DisplayModeSelector from './DisplayModeSelector';

export default function AlgorithmSelector({ 
  algorithm, 
  setAlgorithm, 
  sorting, 
  paused, 
  arraySize,
  setArraySizePreset,
  displayMode,
  setDisplayMode
}) {
  
  const algorithms = [
    { id: 'selection', name: 'Selection Sort' },
    { id: 'insertion', name: 'Insertion Sort' },
    { id: 'bubble', name: 'Bubble Sort' },
    { id: 'quick', name: 'Quick Sort' },
    { id: 'merge', name: 'Merge Sort' }
  ];

  return (
    <div className="w-64 border-r border-gray-800 p-4 flex flex-col">
      <h2 className="text-xl mb-4 border-b border-gray-800 pb-2">Sorting Algorithms</h2>
      
      <div className="space-y-2 mb-8">
        {algorithms.map(algo => (
          <button 
            key={algo.id}
            className={`w-full font-medium py-2 px-4 rounded text-left ${algorithm === algo.id ? 'bg-green-600 text-black' : 'bg-black-800 hover:bg-gray-700'}`}
            onClick={() => setAlgorithm(algo.id)}
            disabled={sorting && !paused}
          >
            {algo.name}
          </button>
        ))}
      </div>
      
      <h2 className="text-xl mb-4 border-b border-gray-800 pb-2 font-medium">Settings</h2>
      
      <ArraySizeSelector 
        arraySize={arraySize}
        setArraySizePreset={setArraySizePreset}
        sorting={sorting}
        paused={paused}
      />
      
      <DisplayModeSelector 
        displayMode={displayMode}
        setDisplayMode={setDisplayMode}
      />
     
    </div>
  );
}
