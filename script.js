function MergeSort(array) {
  if (array.length == 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let right = array.slice(0, mid);
  let left = array.slice(mid, array.length);
  right = MergeSort(right);
  left = MergeSort(left);
  return MergeArray(right, left);
}

function MergeArray(array1, array2) {
  let sortedArray = [];
  while (array1.length || array2.length) {
    if (!array2.length || array1[0] < array2[0]) {
      sortedArray.push(array1.shift());
    } else {
      sortedArray.push(array2.shift());
    }
  }
  return sortedArray;
}

let unsortedlist = document.querySelector("input");
let submitBtn = document.querySelector("button");
let sortedList = document.getElementById("result");
submitBtn.onclick = (event) => {
  event.preventDefault();
  let unsortedlistArray = unsortedlist.value.split(",");
  let sortedlistArray = MergeSort(unsortedlistArray);
  alert(sortedlistArray);
};
