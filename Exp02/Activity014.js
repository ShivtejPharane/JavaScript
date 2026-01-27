//find factorial of a number
function factorial(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
let number = 5;
console.log("Factorial:", factorial(number));
