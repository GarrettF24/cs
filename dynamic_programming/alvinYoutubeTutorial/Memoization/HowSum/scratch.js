// Write a function that takes in a targetSum and an array of numbers as arguments

// The function should return an array containing any combination of elements that
// add up to exactly the target sum. If there is no combination that adds up to the
// target sum, then return null

// If there are multiple combinations possible, you may return any single one.
// const howSum = (target, nums) => {
//   //base cases
//   if (target === 0) return [];
//   if (target < 0) return null;

//   //recursive branching logic
//   for (let num of nums) {
//     //branching logic
//     const remainder = target - num;
//     const remainderResult = howSum(remainder, nums);
//     if (remainderResult !== null) {
//       return [...remainderResult, num];
//     }
//   }
//   return null;
// };

// Optimized

const howSum = (target, nums, memo = {}) => {
  //base cases
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  //recursive branching logic
  for (let num of nums) {
    //branching logic
    const remainder = target - num;
    //pass along memo to all recursive calls
    const remainderResult = howSum(remainder, nums, memo);
    if (remainderResult !== null) {
      //store return lines in memo
      memo[target] = [...remainderResult, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
};

console.log(howSum(7, [2, 3])); // [3,2,2]
console.log(howSum(7, [5, 3, 4, 7])); // [4,3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2,2,2,2]
console.log(howSum(300, [7, 14])); // null
