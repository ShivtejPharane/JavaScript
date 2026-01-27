//find missing number in array
function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}
let arr = [1, 2, 4, 5, 6];
let n = 6;
console.log("Missing number:", findMissingNumber(arr, n));
