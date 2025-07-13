import { useState } from 'react';
import AlgorithmSelector from './components/AlgorithmSelector';
import VisualizationArea from './components/VisualizationArea';
import ControlPanel from './components/ControlPanel';
import AlgorithmInfo from './components/AlgorithmInfo';
import ColorLegend from './components/ColorLegend';
import useSorting from './hooks/useSorting';
import ChatBotButton from './components/ChatBotButton';


export default function SortingVisualizer() {
  const [displayMode, setDisplayMode] = useState('bars');
  // Destructor = normally variable ka access provide karta h
  const {
    array,
    sorting,
    paused,
    completed,
    algorithm,
    setAlgorithm,
    speed,
    setSpeed,
    arraySize,
    comparingIndices,
    swappingIndices,
    sortingInfo,
    generateRandomArray,
    startSorting,
    pauseSorting,
    setArraySizePreset
  } = useSorting(10); 

  return (
    <div className="flex h-screen bg-black text-gray-200">
      {/* Left Sidebar */}
      <AlgorithmSelector 
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        sorting={sorting}
        paused={paused}
        arraySize={arraySize}
        setArraySizePreset={setArraySizePreset}
        displayMode={displayMode}
        setDisplayMode={setDisplayMode}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="p-8">
          <AlgorithmInfo sortingInfo={sortingInfo} />
          
          <ColorLegend />
          
          <VisualizationArea 
            array={array}
            comparingIndices={comparingIndices}
            swappingIndices={swappingIndices}
            completed={completed}
            arraySize={arraySize}
            displayMode={displayMode}
          />
          
          <ControlPanel 
            speed={speed}
            setSpeed={setSpeed}
            sorting={sorting}
            paused={paused}
            completed={completed}
            startSorting={startSorting}
            pauseSorting={pauseSorting}
            generateRandomArray={generateRandomArray}
          />
        </div>
        <div className="fixed top-4 right-4 z-50">
        <ChatBotButton />
      </div>
      </div>
    </div>
  );
}