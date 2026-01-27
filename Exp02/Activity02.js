//write a function to calculate sum of array elements

function sumofarray(arr){
let sum = 0
for(let i =0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    return sum;
}

let arr = [1,2,3,4,5,6]
console.log("The Sum of the array is : ",sumofarray(arr));
