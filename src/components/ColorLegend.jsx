export default function ColorLegend() {
    // Color legend items
    const colorLegendItems = [
      { color: '#e2e8f0', label: 'Unsorted' },
      { color: '#FFD700', label: 'Comparing' },
      { color: '#FF4500', label: 'Swapping' },
      { color: '#4CAF50', label: 'Sorted' }
    ];
  
    return (
      <div className="flex flex-wrap gap-2 mb-4">
        {colorLegendItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <div 
              className="w-4 h-4 rounded mr-1" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm text-gray-400">{item.label}</span>
          </div>
        ))}
      </div>
    );
  }