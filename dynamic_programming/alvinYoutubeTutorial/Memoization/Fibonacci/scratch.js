// Write a function 'fib(n)' that takes in a number as an argument.
// The function should returnthe n-th number of the Fib sequence

// The 1st and 2nd number of the sequence is 1
// To generate the next number of the sequence, we sum the previous two.

// Correct but lacks efficeny
// const fib = (n) => {
//   //base case
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));

// Time to optimize!!:)

//memoization --> very common dyPro pattern
// use fast access data structure
// in JavaScript --> JavaScript Object, keys will be arg to the function, the value will be the return value

const fib = (n, memo = {}) => {
  // if n is already in memo object, return n's value
  if (n in memo) return memo[n];
  // if its not, manually calculate
  //base case
  if (n <= 2) return 1;
  // store the value in the original brute force approach in the object
  // ---- return fib(n - 1) + fib(n - 2); -----
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
  // still returning the last expression from before, but also storing that value in the object.
  // pass in memo so all recursive function calls are accessing the same memo.
  // only recieve a new memo object when making a top level call.
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
