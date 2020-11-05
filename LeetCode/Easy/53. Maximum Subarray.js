/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = (nums) => {
    let sum = Number.NEGATIVE_INFINITY,
        result = Number.NEGATIVE_INFINITY;
    nums.map(el => {
        sum = Math.max(0, sum);
        sum += el;
        result = Math.max(result, sum);
    })
    return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))