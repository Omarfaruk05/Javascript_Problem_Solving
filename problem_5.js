// Find duplicats from an array and show the duplicate numbers in array

const findDuplicates = (nums) => {
  const duplicates = [];

  for (let i = 0; i < nums.length; i++) {
    for (let x = i + 1; x < nums.length; x++) {
      if (nums[i] === nums[x] && !duplicates.includes(nums[i])) {
        duplicates.push(nums[i]);
      }
    }
  }

  return duplicates;
};

const result = findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(result);
