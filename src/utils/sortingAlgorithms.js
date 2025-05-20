// Bubble Sort
export const bubbleSort = async ({
    array, 
    setArray,
    sortingRef,
    setCompleted,
    setSorting,
    setPaused,
    pausedRef,
    sleep,
    speed,
    setComparingIndices,
    setSwappingIndices
  }) => {
    const arr = [...array];
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!sortingRef.current) return; // Stop sorting if flag is false
        
        setComparingIndices([j, j + 1]);
        await sleep(speed);
        
        if (arr[j] > arr[j + 1]) {
          // Swap
          setSwappingIndices([j, j + 1]);
          await sleep(speed);
          
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          
          setArray([...arr]);
          await sleep(speed);
          setSwappingIndices([]);
        }
        
        setComparingIndices([]);
      }
    }
    
    if (sortingRef.current) {
      setCompleted(true);
      setSorting(false);
      setPaused(false);
      sortingRef.current = false;
      pausedRef.current = false;
    }
  };
  
  // Selection Sort
  export const selectionSort = async ({
    array, 
    setArray,
    sortingRef,
    setCompleted,
    setSorting,
    setPaused,
    pausedRef,
    sleep,
    speed,
    setComparingIndices,
    setSwappingIndices
  }) => {
    const arr = [...array];
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      
      for (let j = i + 1; j < n; j++) {
        if (!sortingRef.current) return; // Stop sorting if flag is false
        
        setComparingIndices([minIdx, j]);
        await sleep(speed);
        
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      
      if (minIdx !== i) {
        // Swap
        setSwappingIndices([i, minIdx]);
        await sleep(speed);
        
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        
        setArray([...arr]);
        await sleep(speed);
        setSwappingIndices([]);
      }
      
      setComparingIndices([]);
    }
    
    if (sortingRef.current) {
      setCompleted(true);
      setSorting(false);
      setPaused(false);
      sortingRef.current = false;
      pausedRef.current = false;
    }
  };
  
  // Insertion Sort
  export const insertionSort = async ({
    array, 
    setArray,
    sortingRef,
    setCompleted,
    setSorting,
    setPaused,
    pausedRef,
    sleep,
    speed,
    setComparingIndices,
    setSwappingIndices
  }) => {
    const arr = [...array];
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
      if (!sortingRef.current) return;
      
      let key = arr[i];
      let j = i - 1;
      
      setComparingIndices([i]);
      await sleep(speed);
      
      while (j >= 0 && arr[j] > key) {
        if (!sortingRef.current) return; // Stop sorting if flag is false
        
        setComparingIndices([j, j + 1]);
        await sleep(speed);
        
        setSwappingIndices([j, j + 1]);
        arr[j + 1] = arr[j];
        setArray([...arr]);
        await sleep(speed);
        setSwappingIndices([]);
        
        j--;
      }
      
      arr[j + 1] = key;
      setArray([...arr]);
      await sleep(speed);
      setComparingIndices([]);
    }
    
    if (sortingRef.current) {
      setCompleted(true);
      setSorting(false);
      setPaused(false);
      sortingRef.current = false;
      pausedRef.current = false;
    }
  };
  
  // Quick Sort
  export const quickSort = async ({
    array, 
    setArray,
    sortingRef,
    setCompleted,
    setSorting,
    setPaused,
    pausedRef,
    sleep,
    speed,
    setComparingIndices,
    setSwappingIndices
  }) => {
    const arr = [...array];
    
    const partition = async (low, high) => {
      if (!sortingRef.current) return -1; // Stop sorting if flag is false
  
      const pivot = arr[high];
      let i = low - 1;
      
      for (let j = low; j < high; j++) {
        if (!sortingRef.current) return -1;
        
        setComparingIndices([j, high]);
        await sleep(speed);
        
        if (arr[j] < pivot) {
          i++;
          
          // Swap arr[i] and arr[j]
          setSwappingIndices([i, j]);
          await sleep(speed);
          
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          
          setArray([...arr]);
          await sleep(speed);
          setSwappingIndices([]);
        }
      }
      
      // Swap arr[i+1] and arr[high]
      setSwappingIndices([i + 1, high]);
      await sleep(speed);
      
      const temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;
      
      setArray([...arr]);
      await sleep(speed);
      setSwappingIndices([]);
      setComparingIndices([]);
      
      return i + 1;
    };
    
    const sort = async (low, high) => {
      if (low < high && sortingRef.current) {
        const pi = await partition(low, high);
        if (pi === -1) return; // Stop if sorting was cancelled
        
        await sort(low, pi - 1);
        await sort(pi + 1, high);
      }
    };
    
    await sort(0, arr.length - 1);
    
    if (sortingRef.current) {
      setCompleted(true);
      setSorting(false);
      setPaused(false);
      sortingRef.current = false;
      pausedRef.current = false;
    }
  };
  
  // Merge Sort
  export const mergeSort = async ({
    array, 
    setArray,
    sortingRef,
    setCompleted,
    setSorting,
    setPaused,
    pausedRef,
    sleep,
    speed,
    setComparingIndices,
    setSwappingIndices
  }) => {
    const arr = [...array];
    
    const merge = async (start, mid, end) => {
      if (!sortingRef.current) return false; // Stop sorting if flag is false
      
      const leftArr = arr.slice(start, mid + 1);
      const rightArr = arr.slice(mid + 1, end + 1);
      
      let i = 0, j = 0, k = start;
      
      while (i < leftArr.length && j < rightArr.length) {
        if (!sortingRef.current) return false;
        
        setComparingIndices([start + i, mid + 1 + j]);
        await sleep(speed);
        
        if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
        } else {
          arr[k] = rightArr[j];
          j++;
        }
        
        setArray([...arr]);
        await sleep(speed);
        setComparingIndices([]);
        
        k++;
      }
      
      while (i < leftArr.length) {
        if (!sortingRef.current) return false;
        
        arr[k] = leftArr[i];
        setArray([...arr]);
        await sleep(speed);
        
        i++;
        k++;
      }
      
      while (j < rightArr.length) {
        if (!sortingRef.current) return false;
        
        arr[k] = rightArr[j];
        setArray([...arr]);
        await sleep(speed);
        
        j++;
        k++;
      }
      
      return true;
    };
    
    const sort = async (start, end) => {
      if (start < end && sortingRef.current) {
        const mid = Math.floor((start + end) / 2);
        
        await sort(start, mid);
        await sort(mid + 1, end);
        
        const shouldContinue = await merge(start, mid, end);
        if (!shouldContinue) return;
      }
    };
    
    await sort(0, arr.length - 1);
    
    if (sortingRef.current) {
      setCompleted(true);
      setSorting(false);
      setPaused(false);
      sortingRef.current = false;
      pausedRef.current = false;
    }
  };