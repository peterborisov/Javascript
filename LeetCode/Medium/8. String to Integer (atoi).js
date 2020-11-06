/**
 * @param {string} s
 * @return {number}
 */
let myAtoi = (s) => {
    s = s.replace(/^ +/, '');
    const num = /^[-+]?\d/.test(s) ? parseInt(s, 10) : 0;
    return Math.max(-(2**31), Math.min(2**31 - 1, num || 0));
};

console.log(myAtoi("4193 with words"))