function findRotatedIndex(arr, num) {
 
    let rotationIdx = findRotationIdx(arr);

    if (rotationIdx > 0 && num >= arr[0] && num <= arr[rotationIdx - 1]) {
        return divAndCon(arr, num, 0, rotationIdx - 1);
    } else {
        return divAndCon(arr, num, rotationIdx, arr.length - 1);
    }

    function divAndCon(arr, num, leftIdx, rightIdx) {
        if (arr.length === 0) return -1;

        if (num < arr[leftIdx] || num > arr[rightIdx]) return -1;

        while (leftIdx <= rightIdx) {
            let midIdx = Math.floor((leftIdx + rightIdx) / 2);

            if (arr[midIdx] === num) {
                return midIdx;
            } else if (num < arr[midIdx]) {
                rightIdx = midIdx - 1;
            } else {
                leftIdx = midIdx + 1;
            }
        }

        return -1
    }

    function findRotationIdx(arr) {
        if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
        let leftIdx = 0;
        let rightIdx = arr.length - 1;

        while (leftIdx <= rightIdx) {
            let midIdx = Math.floor((leftIdx + rightIdx) / 2);
            if (arr[midIdx] > arr[midIdx + 1]) {
                return midIdx + 1
            } else if (arr[leftIdx] <= arr[midIdx]) {
                leftIdx = midIdx + 1;
            } else {
                rightIdx = midIdx - 1;
            }
        }
    }
}


module.exports = findRotatedIndex