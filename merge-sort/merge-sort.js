/**
 * Merge Sort Algorithm - Average Case
 * The average case time complexity of the merge sort algorithm is O(n log n), where n is the number of elements in the array.
 * @param {*} arr
 * @returns
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base case

  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  // Merge two sorted arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

const array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
