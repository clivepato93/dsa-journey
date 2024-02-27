const array = [1, 2, 3, 4, 5];

function read(index) {
  if (array[index] == undefined) {
    throw new RangeError("index is out of range");
  }
  return array[index];
}

// console.log(read(9));
// console.log(read(2));

function search(num) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element == num) {
      return `${element} was found in the index ${i}`;
    }
  }
  return `the  value ${num} isn't in the array`;
}

console.log(search(9));
console.log(search(2));

function insert(num, index = null) {
  if (!index) {
    array[array.length] = num;
  } else if (index > array.length - 1 || index < 0) {
    throw new RangeError("invalid index given");
  } else {
    for (let i = array.length - 1; i >= index; i--) {
      //   debugger;
      array[i + 1] = array[i];
      if (i == index) {
        array[i] = num;
      }
    }
  }
  return `${num} added to the array ${array}`;
}

console.log(insert(6, 1));
// console.log(array);

function deleteValue(index) {
  for (let i = index; i < array.length; i++) {
    if (index == i) {
      array[index] = "";
    }
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return `the  value from ${index} has been deleted the array is now ${array}`;
}

console.log(deleteValue(1));
