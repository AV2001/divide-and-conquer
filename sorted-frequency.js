function findFirstOccurrence(arr, num) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        const middleElement = arr[middleIndex];

        if (
            middleElement === num &&
            (middleIndex === 0 || arr[middleIndex - 1] !== num)
        ) {
            return middleIndex;
        } else if (middleElement >= num) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1;
}

function findLastOccurrence(arr, num) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        const middleElement = arr[middleIndex];

        if (
            middleElement === num &&
            (middleIndex === arr.length - 1 || arr[middleIndex + 1] !== num)
        ) {
            return middleIndex;
        } else if (middleElement > num) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1;
}

function sortedFrequency(arr, num) {
    const firstOccurrence = findFirstOccurrence(arr, num);
    if (firstOccurrence === -1) {
        return -1;
    }
    const lastOccurrence = findLastOccurrence(arr, num);
    return lastOccurrence - firstOccurrence + 1;
}

module.exports = sortedFrequency;
