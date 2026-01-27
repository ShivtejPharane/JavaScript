//write a code for reversse number
function reverseNumber(num) {
    let reverse = 0;

    while (num !== 0) {
        reverse = reverse * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return reverse;
}
let number = 12345;
console.log("Reversed number:", reverseNumber(number));

