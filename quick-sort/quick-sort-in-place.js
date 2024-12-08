function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Partition the array
    const pivotIndex = partition(arr, low, high);

    // Recursively apply to subarrays
    quickSortInPlace(arr, low, pivotIndex - 1);
    quickSortInPlace(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high]; // Choose the pivot
  let i = low - 1; // Index of smaller element

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot
  return i + 1;
}

const array = [8, 3, 7, 6, 1, 5];
console.log(quickSortInPlace(array)); // Output: [1, 3, 5, 6, 7, 8]
