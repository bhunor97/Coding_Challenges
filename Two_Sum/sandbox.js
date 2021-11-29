var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] + nums[k] == target) {
        return [i, k];
      }
    }
  }
};

console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([-1, -2, -3, -4, -5], -8));
