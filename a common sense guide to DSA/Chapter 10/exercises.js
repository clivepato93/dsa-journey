/*
1. The following function prints every other number from a low number to a
high number. For example, if low is 0 and high is 10, it would print:
0 2 4 6 8 10
Identify the base case in the function:
def print_every_other(low, high)
return if low > high
puts low
print_every_other(low + 2, high)
end
*/

// the base is the the return if low > high

/*
2. My kid was playing with my computer and changed my factorial function
so that it computes factorial based on (n - 2) instead of (n - 1) . Predict what
will happen when we run factorial(10) using this function:

def factorial(n)
  return 1 if n == 1
  return n * factorial(n - 2)
end
*/

// the call stack will never clear so it will produce a maximum call stack error

/* 3. Following is a function in which we pass in two numbers called low and
high . The function returns the sum of all the numbers from low to high . For
example, if low is 1, and high is 10, the function will return the sum of all
numbers from 1 to 10, which is 55. However, our code is missing the base
case, and will run indefinitely! Fix the code by adding the correct base case:
def sum(low, high)
  return high + sum(low, high - 1)
end
*/

/*  solution
def sum(low, high)
  if low >= high
    return low
  return high + sum(low, high - 1)
end
*/

/*4. 4. Here is an array containing both numbers as well as other arrays, which
in turn contain numbers and arrays:
array = [
1,
2,
3,
[4, 5, 6],
7,
[8,
[9, 10, 11,
[12, 13, 14]
]
],
[15, 16, 17, 18, 19,
[20, 21, 22,
[23, 24, 25,
[26, 27, 29]
], 30, 31
], 32
], 33
]
Write a recursive function that prints all the numbers (and just numbers). */

function logAllnums(arr, final = []) {
  for (let i = 0; i < arr.length; i++) {
    // debugger;
    if (typeof arr[i] !== "number") {
      logAllnums(arr[i], final);
    } else {
      console.log(arr[i]);
      final.push(arr[i]);
    }
  }
  return final;
}

// console.log(
//   logAllnums([
//     1,
//     2,
//     3,
//     [4, 5, 6],
//     7,
//     [8, [9, 10, 11, [12, 13, 14]]],
//     [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
//     33,
//   ])
// );

/*
Eloquent JS book chapter 4
Deep comparison
The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual
*/
function deepEqual(obj1, obj2) {
  debugger;
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  if (key1.length != key2.length) {
    return false;
  }
  for (let i = 0; i < key1.length; i++) {
    if (
      typeof obj1[key1[i]] == "object" &&
      Boolean(obj1[key1[i]]) != false &&
      typeof obj2[key2[i]] == "object" &&
      Boolean(obj2[key2[i]]) != false
    ) {
      deepEqual(obj1[key1[i]], obj2[key1[i]]);
    } else if (obj1[key1[i]] !== obj2[key2[i]]) return false;
  }
  return true;
}
// time to see if i kind of get recursion
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
