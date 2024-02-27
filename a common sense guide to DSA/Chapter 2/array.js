const array = [1, 20, 30, 40, 50];

function insertionOnSA(num) {
  let index = null;
  for (let i = 0; i < array.length; i++) {
    // debugger;
    if (array[i] >= num) {
      index = i;
      break;
    }
  }
  if (index == null) {
    index = array.length;
    array[index] = num;
  } else {
    for (let j = array.length - 1; j >= index; j--) {
      array[j + 1] = array[j];
      if (j == index) {
        array[j] = num;
      }
    }
  }
  return `the  value ${num} has been added`;
}

console.log(insertionOnSA(0));
console.log(array);

function linearSearch(num) {
  for (let i = 0; i < array.length; i++) {
    // debugger;
    if (array[i] == num) {
      return `${num} is in the array it's in the index ${i}`;
    }
  }
  return `the  value ${num} isn't in the array `;
}

console.log(linearSearch(200));
