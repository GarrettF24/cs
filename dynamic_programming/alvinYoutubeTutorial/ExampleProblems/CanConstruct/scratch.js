// Write a function that accepts a target string and an array of strings.

//should return boolean indicating whether or not the target can be constructed by cocatenating
// elements of the wordBank array

// You may reuse elements of wordBank as many times as needed.

// const canConstruct = (target, wordBank) => {
//   //base case
//   if (target === '') return true;

//   //recursive call to make target smaller and smaller until empty
//   for (let word of wordBank) {
//     //if word is prefix of target
//     if (target.indexOf(word) === 0) {
//       //make a shallow copy of target - word
//       const suffix = target.slice(word.length);
//       if (canConstruct(suffix, wordBank)) return true;
//     }
//   }
//   return false;
// };

const canConstruct = (target, wordBank, memo = {}) => {
  //base case
  if (target in memo) return memo[target];
  if (target === '') return true;

  //recursive call to make target smaller and smaller until empty
  for (let word of wordBank) {
    //if word is prefix of target
    if (target.indexOf(word) === 0) {
      //make a shallow copy of target - word
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); //true
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); //false
