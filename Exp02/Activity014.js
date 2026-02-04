//find factorial of a number
function factorial(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
let nber = 5;
console.log("Factorial:", factorial(nber));
