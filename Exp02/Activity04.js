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
console.log(isPalindrome(number));
