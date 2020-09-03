/*
Determine whether an integer is a palindrome. An integer is a 
palindrome when it reads the same backward as forward.

Input: 121
Output: true
*/

/**
 * @param {number} x
 * @return {boolean}
 */

let isPalindrome = (x) => {
    let reversed = parseInt(x.toString().split('').reverse().join(''));
    return reversed === x ? true : false;
};

console.log(isPalindrome(121))