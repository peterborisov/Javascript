/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = (nums) => {
    nums.map(() => {
        const index = nums.indexOf(0);
        index > -1 ? (nums.splice(index, 1), nums.push(0)) : ''
    })
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]))