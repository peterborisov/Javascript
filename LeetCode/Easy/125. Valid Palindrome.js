/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = (s) =>{
    s = s.toLowerCase().split(/[^a-z0-9]/).join('');
    let result = s.split('').reverse().join('');
    console.log(s)
    return s === '' ? true : s === result;
};

console.log(isPalindrome("0P"));