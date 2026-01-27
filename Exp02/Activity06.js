//find largest element in an array
function findLargest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let numbers = [12, 45, 7, 89, 23];
console.log("Largest element:", findLargest(numbers));

