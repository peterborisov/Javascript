/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum 
length of s is 1000.

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
*/

let longestPalindrome = (s) => {
    let reversed = (str) => str.split('').reverse().join('');
    let result = '';
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        result += element;
        if (result.length > 1 && result === reversed(result)) {
            return result;
        }
    }
}

console.log(longestPalindrome("babad"))