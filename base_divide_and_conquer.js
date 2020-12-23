// takes in an array and a value
// returns the index of the value
// if value cannot be found, return -1

function divAndCon(arr, val) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {

        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx];

        if (midVal < val) {
            
            leftIdx = midIdx + 1;

        } else if (midVal < val) {
            
            rightIdx = midIdx - 1;

        } else {

            return midIdx
        }
    }

    return -1
}