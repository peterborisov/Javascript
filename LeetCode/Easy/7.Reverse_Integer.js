/*
Given a 32-bit signed integer, reverse digits of an integer.
Input: 123
Output: 321
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer 
range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 
when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */

let reverse = (x) => {
    let result = parseInt(x.toString().split('').reverse().join(''));
    x < 0 ? result *= -1 : '';
    if (result < (Math.pow(2, 31) * -1) || result > Math.pow(2, 31) - 1) return 0;
    return result;
};
console.log(reverse(1534236469))