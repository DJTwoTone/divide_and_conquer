function countZeroes(arr) {
  
    let firstIdx = 0;
    let lastIdx = arr.length - 1
    let midIdx;

    if (lastIdx === 0) return 0;

    while ( lastIdx >= firstIdx) {
        midIdx = firstIdx + Math.floor((lastIdx - firstIdx) / 2)

        if (arr[midIdx] === 1) {
            firstIdx = midIdx + 1;
        } else {
            lastIdx = midIdx - 1; 
        }
    }

    return arr.length - firstIdx

}

module.exports = countZeroes