let array = [5, 1, 5, 7, 2];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let leftArray = mergeSort(array.slice(0, mid));
  let rightArray = mergeSort(array.slice(mid));
  return merge(leftArray, rightArray);
}

function merge(leftArr, rightArr) {
  let sortedArray = [];
  let i = 0,
    j = 0;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      sortedArray.push(leftArr[i]);
      i++;
    } else {
      sortedArray.push(rightArr[j]);
      j++;
    }
  }

  while (i < leftArr.length) {
    sortedArray.push(leftArr[i]);
    i++;
  }

  while (j < rightArr.length) {
    sortedArray.push(rightArr[j]);
    j++;
  }

  return sortedArray;
}

console.log(mergeSort(array)); // Prints 1, 2, 5, 5, 7
