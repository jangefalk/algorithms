/**
 *  Bubble Sort Algorithm - Worst Case
 * The worst case time complexity of the bubble sort algorithm is O(n^2), where n is the number of elements in the array.
 * This function implements the bubble sort algorithm for the average case scenario.
 * @param {*} arr
 * @returns
 */
function bubbleSortWorst(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let worstCaseArray = [5, 4, 3, 2, 1];
console.log("Worst Case:", bubbleSortWorst(worstCaseArray)); // Output: [1, 2, 3, 4, 5]
