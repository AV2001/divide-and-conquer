function findRotationCount(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (arr[middleIndex] < arr[middleIndex - 1]) {
            return middleIndex;
        } else if (arr[middleIndex] > arr[rightIndex]) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex;
        }
    }

    // If the array is not rotated, leftIndex will be at the first element
    if (leftIndex === 0) {
        return 0;
    }

    return leftIndex;
}

module.exports = findRotationCount;
