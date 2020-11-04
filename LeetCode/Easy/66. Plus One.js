/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = (digits) => {
    return digits = BigInt(digits.join('')) + BigInt(1), digits.toString().split('').map((el) => +el);
};

console.log(plusOne([9, 9]))
