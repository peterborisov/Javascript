/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = (nums) => {
    let result = {}
    nums.map(el => { result[el] = (result[el] || 0) + 1; })
    result = Object.entries(result).sort((a, b) => b[1] - a[1]);
    return result[0][0]
};

console.log(majorityElement([2, 2, 1, 1, 2, 2]))