export default function SpeedControl({ speed, setSpeed }) {
    return (
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 max-w-xs">
          <div className="mb-2 flex justify-between">
            <span>Speed</span>
            <span>{Math.round(100 - (speed / 10))}%</span>
          </div>
          <input 
            type="range" 
            min="10" 
            max="1000" 
            value={1010 - speed} 
            onChange={(e) => setSpeed(1010 - e.target.value)}
            className="w-full accent-green-500 bg-gray-800 h-2 rounded-lg appearance-auto cursor-pointer"
          />
        </div>
      </div>
    );
  }