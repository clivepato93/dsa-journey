/*1. Write a function that returns the intersection of two arrays. The intersection
 is a third array that contains all values contained within the first two
arrays. For example, the intersection of [1, 2, 3, 4, 5] and [0, 2, 4, 6, 8] is [2, 4] .
Your function should have a complexity of O(N). (If your programming
language has a built-in way of doing this, don’t use it. The idea is to build
the algorithm yourself.) */

function interSection(arr1, arr2) {
  const obj = {};
  const interSec = [];
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) interSec.push(arr2[i]);
  }
  return interSec;
}

console.log(interSection([1, 2, 3, 4, 5], [0, 2, 4, 6, 8]));

// After dropping the constants it will be O(N^2)

/*2. Write a function that accepts an array of strings and returns the first
duplicate value it finds. For example, if the array is ["a", "b", "c", "d", "c", "e",
"f"] , the function should return "c" , since it’s duplicated within the array.
(You can assume that there’s one pair of duplicates within the array.)
Make sure the function has an efficiency of O(N). */

function duplicates(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    const letter = array[i];
    if (!obj[letter]) {
      obj[letter] = "c";
    } else {
      return letter;
    }
  }
  return false;
}

console.log(duplicates(["a", "b", "c", "d", "c", "e", "f"]), "c");

/*3. Write a function that accepts a string that contains all the letters of the
alphabet except one and returns the missing letter. For example, the string,
"the quick brown box jumps over a lazy dog" contains all the letters of the alphabet
except the letter, "f" . The function should have a time complexity of O(N). */

function letterCheck(str) {
  //   let total = 26;
  const obj = {};
  //   const arr = [];
  for (let i = 0; i < 26; i++) {
    // const element = array[i];
    obj[String.fromCharCode(i + 97)] = 0;
    // arr.push(String.fromCharCode(i + 97));
  }
  //   console.log(arr, obj);
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (element == " ") continue;
    else {
      obj[element] = obj[element] += 1;
    }
  }
  console.log(obj);
  for (const key in obj) {
    if (obj[key] == 0) {
      return key;
    }
  }
}

// console.log(letterCheck("the quick brown box jumps over a lazy dog"), "f");
/*4 Write a function that returns the first non-duplicated character in a string.
For example, the string, "minimum" has two characters that only exist
once—the "n" and the "u" , so your function should return the "n" , since it
occurs first. The function should have an efficiency of O(N).
*/

function uniqueLetter(str) {
  //   let total = 26;
  const obj = {};
  //   const arr = [];
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (!obj[element]) obj[element] = 1;
    else {
      obj[element] = obj[element] += 1;
    }
  }
  //   console.log(arr, obj);

  for (const key in obj) {
    if (obj[key] == 1) {
      return key;
    }
  }
}
console.log(uniqueLetter("minimum"), "n");
