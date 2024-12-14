function heapSort(arr) {
  let n = arr.length;

  // Build a Max-Heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements one by one from the heap
  for (let i = n - 1; i > 0; i--) {
    // Move the current root (largest element) to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // Left child index
  let right = 2 * i + 2; // Right child index

  // Check if left child exists and is greater than the root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // Check if right child exists and is greater than the largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not the root, swap and continue heapifying
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

const array = [4, 10, 3, 5, 1];
console.log(heapSort(array)); // Output: [1, 3, 4, 5, 10]
