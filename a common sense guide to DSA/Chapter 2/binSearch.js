// https://www.codewars.com/kata/547bf139ec2cf10b7c0003e6/train/javascript

function binSearch(toSearch) {
  let [start, end] = [0, arr.length - 1];
  while (start <= end) {
    debugger;
    const pos = Math.floor((start + end) / 2);
    if (arr[pos] == toSearch) return pos;
    if (toSearch > arr[pos]) {
      start = pos + 1;
    } else {
      end = pos - 1;
    }
  }
  return start;
}

function binSearchAddition(toSearch) {
  let [start, end] = [0, arr.length - 1];
  while (start <= end) {
    debugger;
    const pos = Math.floor((start + end) / 2);
    if (arr[pos] == toSearch) return pos;
    if (toSearch > arr[pos]) {
      start = pos + 1;
    } else {
      end = pos - 1;
    }
  }
  for (let j = arr.length - 1; j >= start; j--) {
    arr[j + 1] = arr[j];
    if (j == start) {
      arr[j] = toSearch;
    }
  }
}

// var arr = [1, 2, 3, 4, 5];

// console.log(binSearch(arr, 6), -1);
// console.log(binSearch(arr, 2), 1);

var arr = [10, 20, 30, 40, 50, 60];

// console.log(binSearchAddition(45));
console.log(binSearchAddition(6));

console.log(arr);
// console.log(binSearchAddition(arr, 2), 1);
