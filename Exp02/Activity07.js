//remove duplicate from array
function removeDuplicates(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
let numbes = [1, 2, 3, 2, 4, 1, 5];
console.log("Array without duplicates:", removeDuplicates(numbes));

