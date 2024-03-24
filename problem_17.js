// Maximum Possible Total
// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

// Examples
// maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43
// maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100
// maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40

const maxTotal = (arr) => {
  if (!(arr.length >= 5)) {
    return "There must be at least five numbers in the array.";
  }
  const descendingOrder = arr.sort((a, b) => b - a);

  let total = 0;

  for (let i = 0; i < 5; i++) {
    total += descendingOrder[i];
  }

  return total;
};
const result = maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);
