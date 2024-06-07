function MergeSort(array) {
  if (array.length == 1) {
    return array[0];
  }
  let mid = Math.floor(array.length / 2);
  let right = array.slice(0, mid);
  let left = array.slice(mid, array.length);
  console.log(right);
  console.log(left);
  MergeSort(right);
  MergeSort(left);
}
MergeSort([2, 5, 6, 3, 5, 6, 7]);
