// Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

// Ans:

const filterArray = (arr) => {
  const nums = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      nums.push(arr[i]);
    }
  }

  return nums;
};

const result = filterArray([1, 2, 3, 4, 5, "a", 7, "b"]);
console.log(result);
