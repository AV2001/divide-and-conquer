function rotationPoint(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (arr[middleIndex] > arr[middleIndex + 1]) {
            return middleIndex + 1;
        } else if (arr[leftIndex] <= arr[middleIndex]) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex;
        }
    }

    return leftIndex;
}

function findRotatedIndex(arr, num) {
    const rotationPointIndex = rotationPoint(arr);

    // Determine which subarray to search
    let leftIndex, rightIndex;
    if (num >= arr[0] && num <= arr[rotationPointIndex - 1]) {
        leftIndex = 0;
        rightIndex = rotationPointIndex - 1;
    } else {
        leftIndex = rotationPointIndex;
        rightIndex = arr.length - 1;
    }

    // Perform binary search on the chosen range
    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[middleIndex] > num) {
            rightIndex = middleIndex - 1;
        } else if (arr[middleIndex] < num) {
            leftIndex = middleIndex + 1;
        } else {
            return middleIndex;
        }
    }

    return -1;
}

module.exports = findRotatedIndex;
