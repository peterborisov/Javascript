// Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
    var lowRegStr = inputString.toLowerCase();
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}