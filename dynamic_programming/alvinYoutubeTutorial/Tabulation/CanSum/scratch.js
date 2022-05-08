const canSum = (target, nums) => {
  const table = Array(target + 1).fill(false);
  // if target is 0, then it will always be true that target can be generated.
  // so seed index 0 with true to represent that.
  table[0] = true;
  //iterate through every element and check if element is true
  for (let i = 0; i <= target; i++) {
    if (table[i] === true) {
      //look ahead
      for (let num of nums) {
        // if current position is reachable, then i + num is reachable
        table[i + num] = true;
      }
    }
  }
  return table[target];
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
