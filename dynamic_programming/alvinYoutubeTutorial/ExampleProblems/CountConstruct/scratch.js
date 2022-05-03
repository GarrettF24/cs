// Write a function that accepts a target string and an array of strings

// should return the number of ways that the target can be constructed by concating elements of wordbank array

// You may reuse elements of wordbank as many times as needed.

//

// memoized;

const countConstruct = (target, wordBank, memo = {}) => {
  //base case
  // if target in the memo return the stored value
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let totalCount = 0;

  //recursive call
  for (let word of wordBank) {
    //check if word is a prefix of target
    if (target.indexOf(word) === 0) {
      // if it is take the word.length off the front of target and add the count to the total
      const count = countConstruct(target.slice(word.length), wordBank, memo);
      totalCount += count;
    }
  }
  // add a total count to the memo v
  memo[target] = totalCount;
  return totalCount;
};

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 2
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 1
console.log(
  countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
); // 4
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); // 0
