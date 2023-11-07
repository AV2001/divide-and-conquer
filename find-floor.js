function findFloor(arr, num) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let floorValue = -1;

    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (arr[middleIndex] === num) {
            return arr[middleIndex];
        } else if (arr[middleIndex] < num) {
            floorValue = arr[middleIndex];
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }

    return floorValue;
}

module.exports = findFloor;
