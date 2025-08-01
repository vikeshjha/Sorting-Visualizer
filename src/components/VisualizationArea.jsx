export default function VisualizationArea({
  array,
  comparingIndices,
  swappingIndices,
  completed,
  arraySize,
  displayMode,
}) {
  
  const getBarColor = (index) => {
    if (swappingIndices.includes(index)) {
      return "#FF4500"; 
    }
    if (comparingIndices.includes(index)) {
      return "#FFD700";
    }
    if (completed) {
      return "#4CAF50"; 
    }
    return "#e2e8f0"; 
  };


  const getBarWidth = () => {
    if (arraySize <= 5 ) return { min: "20px", max: "90px" };
    if (arraySize <= 10) return { min: "10px", max: "50px" };
    if (arraySize <= 15) return { min: "5px", max: "30px" };
    return { min: "2px", max: "20px" };
  };

  return (
    <div className="h-64 bg-gray-900 rounded p-4 mb-8 flex items-end justify-center gap-x-3">
      {array.map((value, index) => {
        const barWidths = getBarWidth();
        return (
          <div
            key={index}
            className="flex flex-col items-center mx-px transition-all duration-150"
            style={{
              width: `${100 / arraySize}%`,
              maxWidth: barWidths.max,
              minWidth: barWidths.min,
            }}
          >
            {/* Bar */}
            <div
              className="rounded-t w-full"
              style={{
                height: `${value * 2}px`,
                backgroundColor: getBarColor(index),
                transform: comparingIndices.includes(index) && !swappingIndices.includes(index)
                  ? "translateY(-10px)"
                  : swappingIndices.includes(index)
                  ? "translateY(-20px)"
                  : "none",
                transition: "all 0.2s ease-in-out",
              }}
            ></div>

            {/* Number */}
            {arraySize <= 100 && displayMode === "numbers" && (
              <div className="text-center text-white text-md">{value}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
