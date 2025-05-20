import SpeedControl from './SpeedControl';
import ActionButtons from './ActionButtons';

export default function ControlPanel({ 
  speed, 
  setSpeed, 
  sorting, 
  paused, 
  completed, 
  startSorting, 
  pauseSorting, 
  generateRandomArray 
}) {
  return (
    <div className="flex items-center  gap-8">
      <div className="flex-1 max-w-md">
        <SpeedControl speed={speed} setSpeed={setSpeed} />
      </div>
      
      <div>
        <ActionButtons 
          sorting={sorting}
          paused={paused}
          completed={completed}
          startSorting={startSorting}
          pauseSorting={pauseSorting}
          generateRandomArray={generateRandomArray}
        />
      </div>
    </div>
  );
}