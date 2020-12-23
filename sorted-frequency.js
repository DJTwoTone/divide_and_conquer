function sortedFrequency(arr, num) {

    let firstIdx = findFirstIdx(arr, num);
    if (firstIdx === -1) return firstIdx;
    let lastIdx = findLastIdx(arr, num);

    function findFirstIdx (arr, num, low = 0, high = arr.length -1) {
        if (high >= low) {
            let midIdx = Math.floor((low + high) / 2);
            if ((midIdx === 0 || num > arr[midIdx -1]) && arr[midIdx] === num) {
                return midIdx
            } else if (num > arr[midIdx]) {
                return findFirstIdx(arr, num, midIdx + 1, high)
            } else {
                return findFirstIdx(arr, num, low, midIdx - 1)
            }
        }
        return -1
    }

    function findLastIdx (arr, num, low = 0, high = arr.length -1) {
        if (high >= low) {
            let midIdx = Math.floor((low + high) / 2)
            if ((midIdx === arr.length -1 || num < arr[midIdx +1]) && arr[midIdx] === num) {
                return midIdx
            } else if (num < arr[midIdx]) {
                return findLastIdx(arr, num, low, midIdx - 1)
            } else {
                return findLastIdx(arr, num, midIdx + 1, high)
            }
        }
        return -1
    }


    return lastIdx - firstIdx + 1;
}

module.exports = sortedFrequency