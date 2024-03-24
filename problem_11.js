// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

// Ans:
const minMax = (nums) => {
  let biggest = nums[0];
  let smallest = nums[0];

  for (let i = 0; i < nums.length; i++) {
    biggest = Math.max(biggest, nums[i]);
    smallest = Math.min(smallest, nums[i]);
  }

  return [smallest, biggest];
};

const result = minMax([1, 2, 3, 4, 5]);
console.log(result);
