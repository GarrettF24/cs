// Write a function that takes in a target sum and an array of numbers as arguments
// the function should return an array containing the shortest combination of numbers
// that add up to exactly the target sum
// If there is a tie for the shortest combination, you may return any of the shortest

// const bestSum = (target, nums) => {
//   // base cases
//   if (target === 0) return [];
//   if (target < 0) return null;
//   // In case there isnt even anyway to generate the target sum.
//   // if no combination, return null
//   let shortest = null;
//   //recursion
//   for (let num of nums) {
//     const remainder = target - num;
//     const remainderCombo = bestSum(remainder, nums);
//     if (remainderCombo !== null) {
//       const combination = [...remainderCombo, num];
//       // if the combination is shorter than current shortest, update shortest
//       if (shortest === null || combination.length < shortest.length) {
//         shortest = combination;
//       }
//     }
//   }
//   return shortest;
// };

const bestSum = (target, nums, memo = {}) => {
  //memo check logic and base cases
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortest = null;

  for (let num of nums) {
    const remainder = target - num;
    const remainderCombo = bestSum(remainder, nums, memo);
    if (remainderCombo !== null) {
      const combination = [...remainderCombo, num];
      if (shortest === null || combination.length < shortest.length) {
        shortest = combination;
      }
    }
  }
  //memo store logic
  memo[target] = shortest;
  return shortest;
};

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3,5]
console.log(bestSum(8, [1, 4, 5])); // [4,4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25,25,25,25]

// Optimization
