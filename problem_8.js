// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

const findMax = (nums) => {
  nums.sort((a, b) => a - b);

  const n = nums.length;

  const maxProduct_1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const maxProduct_2 = nums[0] * nums[1] * nums[n - 1];

  const maxProduct = Math.max(maxProduct_1, maxProduct_2);

  return maxProduct;
};

const result = findMax([1, 2, 3, 4]);

console.log(result);
