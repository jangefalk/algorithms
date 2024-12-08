# Bubble Sort Challenges

## Table of Contents

1. [Beginner: Implement Basic Bubble Sort](#1-beginner-implement-basic-bubble-sort)
2. [Intermediate: Optimized Bubble Sort](#2-intermediate-optimized-bubble-sort)
3. [Intermediate: Sort in Descending Order](#3-intermediate-sort-in-descending-order)
4. [Advanced: Count the Number of Swaps](#4-advanced-count-the-number-of-swaps)
5. [Expert: Sort an Array of Objects](#5-expert-sort-an-array-of-objects)
6. [Expert: Handle Large Arrays Efficiently](#6-expert-handle-large-arrays-efficiently)

---

### **1. Beginner: Implement Basic Bubble Sort**

**Description:**  
Write a function to implement the basic Bubble Sort algorithm to sort an array of integers in ascending order.

**Input Example:**  
`[64, 34, 25, 12, 22, 11, 90]`

**Output Example:**  
`[11, 12, 22, 25, 34, 64, 90]`

**Hints:**

- Use nested loops.
- Compare adjacent elements and swap if needed.

**Difficulty:** Beginner

---

### **2. Intermediate: Optimized Bubble Sort**

**Description:**  
Improve your Bubble Sort algorithm by adding an optimization. If no swaps occur during a pass, the array is already sorted, and the function should terminate early.

**Input Example:**  
`[1, 2, 3, 4, 5]` (Already sorted)

**Output Example:**  
`[1, 2, 3, 4, 5]`

**Challenge:**  
The function should terminate early when no swaps occur in a pass.

**Difficulty:** Intermediate

---

### **3. Intermediate: Sort in Descending Order**

**Description:**  
Modify the Bubble Sort algorithm to sort the array in descending order instead of ascending order.

**Input Example:**  
`[64, 34, 25, 12, 22, 11, 90]`

**Output Example:**  
`[90, 64, 34, 25, 22, 12, 11]`

**Hints:**

- Swap elements if the first is smaller than the second.

**Difficulty:** Intermediate

---

### **4. Advanced: Count the Number of Swaps**

**Description:**  
Write a function that not only sorts an array using Bubble Sort but also counts the total number of swaps made during the sorting process.

**Input Example:**  
`[4, 3, 1, 2]`

**Output Example:**  
Sorted Array: `[1, 2, 3, 4]`  
Number of Swaps: `5`

**Challenge:**  
Keep track of swaps efficiently during the sorting process.

**Difficulty:** Advanced

---

### **5. Expert: Sort an Array of Objects**

**Description:**  
Sort an array of objects using Bubble Sort based on a specific property, such as `age`.

**Input Example:**

```javascript
[
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 23 },
];
```

**Output Example:**

```javascript
[
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 23 },
  { name: "Alice", age: 25 },
];
```

**Challenge:**  
Allow the property to sort by (e.g., `age`, `name`) to be dynamically passed to the function.

**Difficulty:** Expert

---

### **6. Expert: Handle Large Arrays Efficiently**

**Description:**  
Given a very large array (e.g., 10 million elements), write a function to sort the array using Bubble Sort but also measure the time it takes. Analyze its performance and suggest why Bubble Sort might not be ideal for large arrays.

**Input Example:**  
Random array of size `10^6`.

**Output Example:**  
Sorted array and execution time.

**Challenge:**

- Use `console.time` and `console.timeEnd` to measure execution time.
- Consider optimization strategies to improve performance.

**Difficulty:** Expert

---

## How to Use This Guide

1. Start with the beginner challenge and gradually move to more advanced ones.
2. For each challenge, implement the solution in JavaScript (Node.js).
3. Test your code with provided input/output examples.
