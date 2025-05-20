import TimeComplexityDisplay from './TimeComplexityDisplay';

export default function AlgorithmInfo({ sortingInfo }) {
  return (
    <>
      <h1 className="text-4xl mb-4">{sortingInfo.name}</h1>
      
      <p className="mb-6 text-gray-400">{sortingInfo.description}</p>
      
      <div className="flex gap-4 mb-8">
        <TimeComplexityDisplay complexityData={sortingInfo.timeComplexity} />
      </div>
    </>
  );
}