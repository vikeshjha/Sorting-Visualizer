export const algorithmInfo = {
    bubble: {
      name: "Bubble Sort",
      description: "Bubble Sort is a simple algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. Though it's easy to understand and implement, its O(n²) time complexity makes it highly inefficient for large datasets, and even optimized versions are rarely practical beyond educational use.",
      timeComplexity: {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)"
      }
    },
    selection: {
      name: "Selection Sort",
      description: "Selection Sort is a basic algorithm that works by repeatedly selecting the smallest unsorted element and moving it to the sorted portion of the list. It's simple and minimizes swaps, which is beneficial when memory writes are costly. However, with an O(n²) time complexity, it becomes inefficient on larger datasets or nearly sorted arrays, making it more suitable for small collections.",
      timeComplexity: {
        best: "O(n²)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)"
      }
    },
    insertion: {
      name: "Insertion Sort",
      description: "Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time by comparing each new element to those already sorted and inserting it into the correct position. It’s efficient for small or nearly sorted datasets due to its low overhead and adaptive nature, but with an O(n²) time complexity in the worst case, it performs poorly on large unsorted collections.",
      timeComplexity: {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)"
      }
    },
    quick: {
      name: "Quick Sort",
      description: "Quick Sort is a highly efficient divide-and-conquer algorithm that partitions the list into two sublists based on a pivot element, then recursively sorts each sublist. It typically achieves O(n log n) time complexity, but in the worst case can degrade to O(n²). With good pivot selection strategies, it is often the fastest practical choice for large, unsorted datasets.",
      timeComplexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n²)",
        space: "O(log n)"
      }
    },
    merge: {
      name: "Merge Sort",
      description: "Merge Sort is a divide-and-conquer algorithm that splits the list into halves, recursively sorts them, and then merges the sorted halves back together. With a guaranteed O(n log n) time complexity, it's very efficient for large datasets, but it requires additional memory for the merging process, which can be a trade-off in memory-constrained environments.",
      timeComplexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)",
        space: "O(n)"
      }
    }
  };