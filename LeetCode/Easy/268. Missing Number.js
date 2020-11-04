/**
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = (nums) => {
    let result = (+nums.length++) * nums.length / 2;
    nums.map((el) => { result -= el })
    return result;
};

console.log(missingNumber([0, 2]))