export default function DisplayModeSelector({
    displayMode,
    setDisplayMode
  }) {
    return (
      <div className="mb-6">
        <div className="mb-4 text-md font-medium">Display Mode</div>
        <div className="grid grid-cols-2 gap-2">
          <button 
            className={`py-2 px-4 rounded text-center ${displayMode === 'bars' ? 'bg-gray-700' : 'bg-gray-900 border border-gray-700'}`}
            onClick={() => setDisplayMode('bars')}
          >
            Bars
          </button>
          <button 
            className={`py-2 px-4 rounded text-center ${displayMode === 'numbers' ? 'bg-gray-700' : 'bg-gray-900 border border-gray-700'}`}
            onClick={() => setDisplayMode('numbers')}
          >
            Numbers
          </button>
        </div>
      </div>
    );
  }