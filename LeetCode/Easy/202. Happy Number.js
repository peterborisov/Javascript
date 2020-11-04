/**
 * @param {number} n
 * @return {boolean}
 */
let isHappy = (n) => {
    if (n === 1 || n === 7) return true;
    if (n < 10) return false;
    let arr = n.toString().split(''), sum = 0;
    arr.map(el => { sum = Math.pow(el, 2) + sum; })
    return isHappy(sum);
};

console.log(isHappy(19))