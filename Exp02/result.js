//Check prime number or not
function isPrime(num) {
    if (num <= 1) {
        return "Not a Prime Number";
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "Not a Prime Number";
        }
    }
    return "Prime Number";
}
let umber = 17;
document.write("<br>");
document.writeln(isPrime(umber));
let i = -2
if(i%2==0){
    document.write("<br>");
    document.writeln("Even");
}
else{
    document.write("<br>");
    document.writeln("Odd");
    
}
//write a function to calculate sum of array elements

function sumofarray(arr){
let sum = 0
for(let i =0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    return sum;
}

let arr = [1,2,3,4,5,6]
document.write("<br>");
document.writeln("The Sum of the array is : ",sumofarray(arr));
//write a code for reversse number
function reverseNumber(num) {
    let reverse = 0;

    while (num !== 0) {
        reverse = reverse * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return reverse;
}
let numbe = 12345;
document.write("<br>");
document.writeln("Reversed number:", reverseNumber(numbe));
//check number paloindrome or not
function isPalindrome(num) {
    let original = num;
    let reverse = 0;

    while (num > 0) {
        reverse = reverse * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    if (original === reverse) {
        return "Palindrome Number";
    } else {
        return "Not a Palindrome Number";
    }
}

let number = 121;
document.write("<br>");
document.writeln(isPalindrome(number));
//write code for fibonacci series
function fibonacciSeries(n) {
    let a = 0, b = 1;
    document.writeln(a);
    document.writeln(b);

    for (let i = 2; i < n; i++) {
        let c = a + b;
        document.writeln(c);
        a = b;
        b = c;
    }
}
let terms = 7;
fibonacciSeries(terms);
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
document.write("<br>");
document.writeln("Largest element:", findLargest(numbers));

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
document.write("<br>");
document.writeln("Array without duplicates:", removeDuplicates(numbes));

//find missing number in array
function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}
let ar = [1, 2, 4, 5, 6];
let n = 6;
document.write("<br>");
document.writeln("Missing number:", findMissingNumber(ar, n));
//write a code for reverse string
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}
let text = "JavaScript";
document.write("<br>");
document.writeln("Reversed string:", reverseString(text));
//count vowels in a string
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
let tex = "JavaScript Programming";
document.write("<br>");
document.writeln("Number of vowels:", countVowels(tex));

//check string is palindrome or not
function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return "Not a Palindrome String";
        }
        start++;
        end--;
    }
    return "Palindrome String";
}
let txt = "madam";
document.write("<br>");
document.writeln(isPalindrome(txt));

//find factorial of a number
function factorial(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
let nber = 5;
document.write("<br>");
document.writeln("Factorial:", factorial(nber));
