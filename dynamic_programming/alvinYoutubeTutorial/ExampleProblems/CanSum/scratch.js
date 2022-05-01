// Write a function that takes in a targetSum and an array of numbers as arguments.

// The function should return a boolean indicating whether or not it
// is possible to generate the targetSum using numbers from the array.

// You may use an element of the array as many times as needed

// You may assume that all input numbers are nonnegative.

// I want to store all the values in the nums array into a object for a quick look up time.
// the key will be the index, the value will be the value

// then I want to iterate over the nums array
// with each iteration I will check if the sum of target - nums[i] is in the object as a value
// if it is I will return true as 2 integers within the nums array equals to target
// otherwise return false
// const canSum = (target, nums) => {
//   // base cases
//   // if zero is ever reached then return true
//   if (target === 0) return true;
//   if (target < 0) return false;
//   //recursive call for every branch of nums array
//   for (let num of nums) {
//     //branching logic
//     const remainder = target - num;
//     if (canSum(remainder, nums)) return true;
//   }
//   return false;
// };

// Optimized canSum
const canSum = (target, nums, memo = {}) => {
  // base cases
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  // recursive call for every branch of nums array
  for (let num of nums) {
    // branching logic
    const remainder = target - num;
    // pass in memo object so all recursive calls have access to memo
    if (canSum(remainder, nums, memo)) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
};

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
