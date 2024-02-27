// O(N^2) runtime due to the two loops being the reason and the are looping over the same piece of data

function bubbleSort(arr) {
  let loop = true;
  let end = arr.length;
  while (loop) {
    debugger;
    loop = false;
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        loop = true;
      }
    }
    end--;
  }
  return arr;
}

console.log(bubbleSort([4, 2, 7, 1, 3]), [1, 2, 3, 4, 7]);
