// Write a function that accepts a target string and an array of strings.

// return a 2d array containing all of the ways the target can be constructed by concating elements
// of the wordbank array. Each element of the 2d array should represent one combination that constructs
// the target.

// You may reuse elements in word bank as many times as needed.

// const allConstruct = (target, wordBank) => {
//   if (target === '') return [[]];

//   const result = [];
//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       const suffixWays = allConstruct(suffix, wordBank);
//       const targetWays = suffixWays.map((way) => [word, ...way]);
//       result.push(...targetWays);
//     }
//   }
//   return result;
// };

// not technically optimal because we have to return every combo.
const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};

// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// // [['purp', 'le'], ['p','ur','p','le']]
// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
// // [[ 'ab', 'cd', 'ef' ], [ 'ab', 'c', 'def' ], [ 'abc', 'def' ], [ 'abcd', 'ef' ] ]
// console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']));
// []
