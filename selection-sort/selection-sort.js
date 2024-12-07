/**
 * Selection Sort Algorithm
 * The selection sort algorithm sorts an array by repeatedly finding the minimum element from the unsorted portion of the array and moving it to the beginning.
 * @param {*} arr
 * @returns
 */
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the minimum element in the unsorted portion
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum with the first element of the unsorted portion
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
// Already sorted array (Best Case)
// In the best case, there are no swaps needed, but the algorithm still performs all the comparisons.
let bestCaseArray = [1, 2, 3, 4, 5];
console.log("Best Case:", selectionSort(bestCaseArray)); // Output: [1, 2, 3, 4, 5]

// Random order array (Average Case)
let averageCaseArray = [29, 10, 14, 37, 13];
console.log("Average Case:", selectionSort(averageCaseArray)); // Output: [10, 13, 14, 29, 37]

// Reverse order array (Worst Case)
let worstCaseArray = [5, 4, 3, 2, 1];
console.log("Worst Case:", selectionSort(worstCaseArray)); // Output: [1, 2, 3, 4, 5]
