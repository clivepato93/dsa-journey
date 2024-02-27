// Original code O(N**2)
function hasDuplicateValue(array) {
  let steps = 0;
  for (let i = 0; i < array.length; i++) {
    debugger;
    for (let j = 0; j < array.length; j++) {
      steps++;
      if (i !== j && array[i] === array[j]) {
        return true;
      }
    }
  }
  // number of steps to check the  [1, 4, 5, 2, 9] 25 steps
  console.log(steps);
  return false;
}

//improving the function and using the big O runtime to O(N )
// function hasDuplicateValue(array) {
//   const obj = {};
//   for (let i = 0; i < array.length; i++) {
//     debugger;
//     const element = array[i];
//     if (element in obj == false) {
//       obj[element] = true;
//     } else {
//       return obj[element];
//     }
//   }
//   return false;
// }

console.log(hasDuplicateValue([1, 4, 5, 2, 9], false));
// console.log(hasDuplicateValue([1, 5, 3, 9, 1, 4]), true);
