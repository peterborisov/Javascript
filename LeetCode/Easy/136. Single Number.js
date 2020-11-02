/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = (nums) => {
    let obj = {};
    let result = '';
    nums.map(el => { obj[el] = (obj[el] || 0) + 1 })
    Object.entries(obj).forEach(([key, value]) => { value === 1 ? result = key : '' });
    return result;
};

console.log(singleNumber([2, 1, 2]))
