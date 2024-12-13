function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // The current element to be inserted
    let j = i - 1;

    // Move elements of the sorted portion that are greater than key
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the key into its correct position
    arr[j + 1] = key;
  }

  return arr;
}

const array = [8, 3, 7, 6, 2];
console.log(insertionSort(array)); // Output: [2, 3, 6, 7, 8]
