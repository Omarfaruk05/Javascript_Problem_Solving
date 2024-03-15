// Find duplicat from an array and return the duplicate number

const findDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let x = i + 1; x < nums.length; x++) {
      if (nums[i] === nums[x]) {
        return nums[i];
      }
    }
  }
  return "No duplicate number found!";
};

const result = findDuplicate([1, 3, 4, 2]);
console.log(result);
