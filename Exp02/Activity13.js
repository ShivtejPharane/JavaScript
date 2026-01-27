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
let number = 17;
console.log(isPrime(number));
