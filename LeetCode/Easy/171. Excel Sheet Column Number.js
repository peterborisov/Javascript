/**
 * @param {string} s
 * @return {number}
 */
let titleToNumber = (s) => {
    let result = 0;
    s.split('')
        .map((el, index) => {
            result += (el.charCodeAt() - 64) * Math.pow(26, s.length - index - 1)
        })
    return result;
};

console.log(titleToNumber("AAA"));