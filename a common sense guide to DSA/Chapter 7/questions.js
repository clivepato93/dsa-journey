/*1. Use Big O Notation to describe the efficiency of an algorithm that takes
3N^2 + 2N + 1 steps. */

// After dropping the constants it will be O(N^2)

/*2. Use Big O Notation to describe the efficiency of an algorithm that takes
N + log N steps..*/

// After dropping the constants it will be O(N)

/*3. The following function checks whether an array of numbers contains a
pair of two numbers that add up to 10.
function twoSum(array) {
for (let i = 0; i < array.length; i++) {
for (let j = 0; j < array.length; j++) {
if (i !== j && array[i] + array[j] === 10) {
return true;
}
}
}
return false;
What are the best-, average-, and worst-case scenarios? Then, express
the worst-case scenario in terms of Big O Notation. */

// O(N) best case (O)N average with the pair being somewhere in the middle and the worse case the pair isn't found so the runtime is O(N^2)

/*4 The following function returns whether or not a capital “X” is present
within a string.
function containsX(string) {
foundX = false;
for(let i = 0; i < string.length; i++) {
if (string[i] === "X") {
foundX = true;
}
}
return foundX;
}
What is this function’s time complexity in terms of Big O Notation?
Then, modify the code to improve the algorithm’s efficiency for best- and
average-case scenarios.
*/
// O(N) is the runtime and the code for the optimization is the containsX file
