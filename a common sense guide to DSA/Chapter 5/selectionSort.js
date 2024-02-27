// O(N^2) runtime due to the two loops being the reason

function selectionSort(arr) {
  let steps = 0;
  let loop = true;

  for (let i = 0; i < arr.length; i++) {
    let currIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      steps++;
      if (arr[currIndex] > arr[j]) {
        currIndex = j;
      }
    }
    if (currIndex != i) {
      [arr[i], arr[currIndex]] = [arr[currIndex], arr[i]];
      loop = true;
    }
  }
  return arr;
}

console.log(selectionSort([4, 2, 7, 1, 3]), [1, 2, 3, 4, 7]);
