/**
 * @param {number} n
 * @return {number}
 */
let trailingZeroes = (n) => {
    n === 0 ? 0 : '';
    let res = 0; 
    while (n !== 0) {
        n = Math.floor(n / 5);
        res += n;
    }
    return res;
};

console.log(trailingZeroes(5))