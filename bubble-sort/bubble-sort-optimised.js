/**
 * Since the bubble sort algorithm compares each element with the next element and swaps them if they are in the wrong order, the best case scenario is when the array is already sorted. In this case, the algorithm will only make a single pass through the array and will not perform any swaps. This will result in a time complexity of O(n) where n is the number of elements in the array.
 * This function is already optimized for the best case scenario. It checks if any swaps were made in the inner loop, and if not, it breaks out of the outer loop early, as the array is already sorted.
 * @param {*} arr
 * @returns
 */
function bubbleSortOptimized(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Do the swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no two elements were swapped in the inner loop, then the array is already sorted
    if (!swapped) {
      break;
    }
  }
  return arr;
}

let bestCaseArray = [1, 2, 3, 4, 5];
console.log("Best Case:", bubbleSortOptimized(bestCaseArray)); // Output: [1, 2, 3, 4, 5]
