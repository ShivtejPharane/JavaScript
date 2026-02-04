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
console.log(isPalindrome(txt));
