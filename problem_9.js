const sortNumber = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b);

  return sortedNums;
};

const result = sortNumber([2, 0, 2, 10, 1, 0]);

console.log(result);
