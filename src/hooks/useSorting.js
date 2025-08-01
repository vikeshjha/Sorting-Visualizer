import { useState, useEffect, useRef } from 'react';
import { 
  bubbleSort, 
  selectionSort, 
  insertionSort, 
  quickSort, 
  mergeSort 
} from '../utils/sortingAlgorithms';
import { algorithmInfo } from '../utils/algorithmInfo';

export default function useSorting(initialArraySize = 20) {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [paused, setPaused] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [algorithm, setAlgorithm] = useState('selection');
  const [speed, setSpeed] = useState(50);
  const [arraySize, setArraySize] = useState(initialArraySize);
  const [comparingIndices, setComparingIndices] = useState([]);
  const [swappingIndices, setSwappingIndices] = useState([]);
  const [sortingInfo, setSortingInfo] = useState({});
  
  
  const sortingRef = useRef(false);
  const pausedRef = useRef(false);
  const speedRef = useRef(speed);

  
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  
  useEffect(() => {
    setSortingInfo(algorithmInfo[algorithm]);
  }, [algorithm]);

  const generateRandomArray = () => {
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 100) + 5);
    }
    setArray(newArray);
    setCompleted(false);
    setComparingIndices([]);
    setSwappingIndices([]);
  };

  
  useEffect(() => {
    generateRandomArray();
  }, [arraySize]);

 
  const sleep = async (ms) => {
 
    const currentDelay = speedRef.current;
    
    let start = Date.now();
    while (Date.now() - start < currentDelay) {
   
      if (pausedRef.current) {
        await new Promise(resolve => {
          const checkPause = () => {
            if (pausedRef.current) {
              setTimeout(checkPause, 100); 
            } else {
              start = Date.now(); 
              resolve();
            }
          };
          checkPause();
        });
      }
      await new Promise(resolve => setTimeout(resolve, 10));
    }
  };

 
  const startSorting = async () => {
    if (sorting && !paused) return;
    
    if (paused) {
      // Resume sorting
      setPaused(false);
      pausedRef.current = false;
      return;
    }
    
    setSorting(true);
    setCompleted(false);
    sortingRef.current = true;
    pausedRef.current = false;
    
    const sortProps = {
      array: [...array],
      setArray,
      sortingRef,
      setCompleted,
      setSorting,
      setPaused,
      pausedRef,
      sleep,
      speed: speedRef.current,
      setComparingIndices,
      setSwappingIndices
    };

    switch (algorithm) {
      case 'bubble':
        await bubbleSort(sortProps);
        break;
      case 'selection':
        await selectionSort(sortProps);
        break;
      case 'insertion':
        await insertionSort(sortProps);
        break;
      case 'quick':
        await quickSort(sortProps);
        break;
      case 'merge':
        await mergeSort(sortProps);
        break;
      default:
        await bubbleSort(sortProps);
    }
  };

  // Pause sorting
  const pauseSorting = () => {
    setPaused(true);
    pausedRef.current = true;
  };

  // Stop sorting
  const stopSorting = () => {
    sortingRef.current = false;
    pausedRef.current = false;
    setSorting(false);
    setPaused(false);
    setComparingIndices([]);
    setSwappingIndices([]);
  };

  // Change array size presets
  const setArraySizePreset = (preset) => {
    switch (preset) {
      case 'small':
        setArraySize(5);
        break;
      case 'medium':
        setArraySize(15);
        break;
      case 'large':
        setArraySize(25);
        break;
      case 'xl':
        setArraySize(35);
        break;
      default:
        setArraySize(8);
    }
  };

  return {
    array,
    setArray,
    sorting,
    paused,
    completed,
    algorithm,
    setAlgorithm,
    speed,
    setSpeed,
    arraySize,
    setArraySize,
    comparingIndices,
    swappingIndices,
    sortingInfo,
    generateRandomArray,
    startSorting,
    pauseSorting,
    stopSorting,
    setArraySizePreset
  };
}
