/**
 *  Bubble Sort Algorithm - Average Case
 * The average case time complexity of the bubble sort algorithm is O(n^2), where n is the number of elements in the array.
 * This function implements the bubble sort algorithm for the average case scenario.
 * @param {*} arr
 * @returns
 */
function bubbleSortAverage(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Do the swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let averageCaseArray = [5, 1, 4, 2, 8];
console.log("Average Case:", bubbleSortAverage(bestCaseArray)); // Output: [1, 2, 3, 4, 5]
