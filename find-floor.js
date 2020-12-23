function findFloor(arr, num, leftIdx = 0, righIdx = arr.length -1) {
  if (leftIdx > righIdx) return -1;
  if (num >= arr[righIdx]) return arr[righIdx];

  let midIdx = Math.floor((leftIdx + righIdx) / 2);

  if (arr[midIdx] === num) return arr[midIdx];

  if (midIdx > 0 && arr[midIdx - 1] <= num && num < arr[midIdx]) {
      return arr[midIdx - 1];
  }

  if (num < arr[midIdx]) {
      return findFloor(arr, num, leftIdx, midIdx -1)
  }

  return findFloor(arr, num, midIdx + 1, righIdx)
}

module.exports = findFloor