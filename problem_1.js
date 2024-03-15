// Remove duplicates of an array

const removeDuplicates = (array) => {
  const uniqueSet = new Set(array);

  const uniqueArray = [...uniqueSet];

  return uniqueArray;
};

const inputArray = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result = removeDuplicates(inputArray);

console.log(result);
