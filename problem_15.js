// Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// original array

// [1, 3, 5]
// original array transformed into a set

// Ans:

const unique = (arr) => {
  const uniqueValue = new Set(arr);

  const uniqueArray = [...uniqueValue];

  return uniqueArray;
};

const result = unique([1, 3, 3, 5, 5, 5]);
console.log(result);
