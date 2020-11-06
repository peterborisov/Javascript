/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
    const obj = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1, };
    let result = '';

    Object.keys(obj).forEach(el => {
        const repeatCounter = Math.floor(num / obj[el]);
        repeatCounter !== 0 ? result += el.repeat(repeatCounter) : ''
        num %= obj[el];
        num === 0 ? result : ''
    })

    return result;
};

console.log(intToRoman(58))