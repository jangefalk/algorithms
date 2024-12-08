function quickSort(arr) {
  if (arr.length <= 1) return arr; // Base case

  // Choose the pivot (last element)
  const pivot = arr[arr.length - 1];
  const left = []; // Elements less than the pivot
  const right = []; // Elements greater than the pivot

  // Partition the array
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the subarrays and combine
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [8, 3, 7, 6, 1, 5];
console.log(quickSort(array)); // Output: [1, 3, 5, 6, 7, 8]
