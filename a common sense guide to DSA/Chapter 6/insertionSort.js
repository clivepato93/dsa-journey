function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    debugger;
    const temp = array[i];
    // let loop = 0;
    let pos = i;
    while (pos && array[pos - 1] > temp) {
      [array[pos - 1], array[pos]] = [temp, array[pos - 1]];
      pos--;
    }
  }

  return array;
}

console.log(insertionSort([4, 2, 7, 1, 3]), [1, 2, 3, 4, 7]);
