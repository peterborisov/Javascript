/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = (s) => {
    return s = s.trim().split(' '), s[s.length - 1].length;
};

console.log(lengthOfLastWord("aasas"))