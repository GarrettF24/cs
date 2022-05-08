const bestSum = (target, nums) => {
  const table = Array(target + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let num of nums) {
        const combo = [...table[i], num];
        if (!table[i + num] || !table[i + num].length > combo.length)
          table[i + num] = combo;
      }
    }
  }
  return table[target];
};

console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(300, [7, 14]));
