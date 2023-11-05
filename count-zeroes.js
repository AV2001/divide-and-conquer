function countZeroes(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        const middleElement = arr[middleIndex];

        if (middleElement === 1) {
            leftIndex = middleIndex + 1;
        } else if (middleElement === 0) {
            if (middleIndex === 0 || arr[middleIndex - 1] === 1) {
                return arr.length - middleIndex;
            } else {
                rightIndex = middleIndex - 1;
            }
        }
    }

    return 0;
}

module.exports = countZeroes;
