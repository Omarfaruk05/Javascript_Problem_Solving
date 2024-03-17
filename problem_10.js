const findDisappearedNumber = (nums) => {
  const mark = new Set();

  for (const num of nums) {
    mark.add(num);
  }

  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!mark.has(i)) {
      result.push(i);
    }
  }

  return result;
};

const result = findDisappearedNumber([4, 3, 2, 7, 8, 2, 3, 1]);

console.log(result);
