# Selection Sort Challenges

## Table of Contents

1. [Beginner: Implement Basic Selection Sort](#1-beginner-implement-basic-selection-sort)
2. [Intermediate: Sort in Descending Order](#2-intermediate-sort-in-descending-order)
3. [Intermediate: Find K Smallest Elements](#3-intermediate-find-k-smallest-elements)
4. [Advanced: Track Number of Swaps](#4-advanced-track-number-of-swaps)
5. [Expert: Sort an Array of Objects](#5-expert-sort-an-array-of-objects)
6. [Expert: Handle Edge Cases](#6-expert-handle-edge-cases)

---

### **1. Beginner: Implement Basic Selection Sort**

**Description:**  
Write a function to implement the Selection Sort algorithm to sort an array of integers in ascending order.

**Input Example:**  
`[64, 25, 12, 22, 11]`

**Output Example:**  
`[11, 12, 22, 25, 64]`

**Hints:**

- Divide the array into a "sorted" and "unsorted" part.
- Find the minimum element in the unsorted part and swap it with the first unsorted element.

**Difficulty:** Beginner

---

### **2. Intermediate: Sort in Descending Order**

**Description:**  
Modify the Selection Sort algorithm to sort the array in descending order instead of ascending order.

**Input Example:**  
`[64, 25, 12, 22, 11]`

**Output Example:**  
`[64, 25, 22, 12, 11]`

**Hints:**

- Find the maximum element in the unsorted part instead of the minimum.

**Challenge:**  
Your implementation should work for both ascending and descending order based on a parameter (e.g., `isAscending`).

**Difficulty:** Intermediate

---

### **3. Intermediate: Find K Smallest Elements**

**Description:**  
Modify the Selection Sort algorithm to find the **K smallest elements** in an array and return them in sorted order.

**Input Example:**  
Array: `[64, 25, 12, 22, 11]`  
`K = 3`

**Output Example:**  
`[11, 12, 22]`

**Challenge:**  
Avoid fully sorting the array. Stop once you’ve found the first K smallest elements.

**Difficulty:** Intermediate

---

### **4. Advanced: Track Number of Swaps**

**Description:**  
Write a function that sorts an array using Selection Sort and counts the total number of swaps made during the sorting process.

**Input Example:**  
`[64, 25, 12, 22, 11]`

**Output Example:**  
Sorted Array: `[11, 12, 22, 25, 64]`  
Number of Swaps: `4`

**Challenge:**  
Keep the swap count efficient without adding unnecessary variables or complexity.

**Difficulty:** Advanced

---

### **5. Expert: Sort an Array of Objects**

**Description:**  
Sort an array of objects using Selection Sort based on a specific property, such as `price`.

**Input Example:**

```javascript
[
  { name: "Item A", price: 64 },
  { name: "Item B", price: 22 },
  { name: "Item C", price: 12 },
];
```

**Output Example:**

```javascript
[
  { name: "Item C", price: 12 },
  { name: "Item B", price: 22 },
  { name: "Item A", price: 64 },
];
```

**Challenge:**  
Allow dynamic sorting based on any property (e.g., `price`, `name`).

**Difficulty:** Expert

---

### **6. Expert: Handle Edge Cases**

**Description:**  
Write a robust implementation of Selection Sort that handles edge cases such as:

1. Empty array (`[]`).
2. Array with one element (`[42]`).
3. Array with duplicate elements (`[5, 3, 5, 3]`).
4. Large datasets (1 million+ elements).

**Input Example:**  
`[]`, `[42]`, `[5, 3, 5, 3]`

**Output Example:**  
For `[5, 3, 5, 3]`: `[3, 3, 5, 5]`

**Challenge:**  
Optimize your implementation to handle large datasets efficiently.

**Difficulty:** Expert

---

## How to Use This Guide

1. Start with the beginner challenge to understand the basics.
2. Progress to intermediate and advanced challenges to deepen your understanding.
3. Test your implementation with edge cases for robustness.
