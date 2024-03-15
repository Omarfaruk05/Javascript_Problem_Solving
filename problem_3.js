// Find max number of an array

const findMax = (nums) => {
  const max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
};

const result = findMax([3, 2, 3]);

console.log(result);
