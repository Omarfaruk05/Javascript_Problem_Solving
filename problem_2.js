// Remove duplicates of an array

const removeZero = (arr) => {
  const newArray = [...arr];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 0) {
      newArray.splice(i, 1);
    }
  }
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 0) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
};

const result = removeZero([0, 1, 0, 3, 12]);

console.log(result);
