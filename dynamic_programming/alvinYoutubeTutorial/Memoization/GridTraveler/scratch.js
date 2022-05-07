// Say you are a traveler on a 2d grid. You begin in the
// top-left corner and your goal is to travel to the bottom-right corner
// You may only move down or right.

// In how many ways can you travel to the goal on a grid with dimensions m * n

// Write a function that calculates this.
// O(n^2) time...if in tree structure you'll be going 2 * 2 * 2...down the tree
// O(n) space where n is the height of the tree.
// const gridTraveler = (m, n) => {
//   if (m === 1 && n === 1) return 1;
//   if (m === 0 || n === 0) return 0;
//   return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// };

// Optimize

const gridTraveler = (m, n, memo = {}) => {
  // base cases
  // are the arguments in the memo
  //concat both arg strings together
  const key = `${m},${n}`;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  //manual recursive calc
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
