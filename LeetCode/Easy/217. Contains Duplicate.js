/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = (nums) => {
    let set = new Set(nums)
    let compare = JSON.stringify(nums) === JSON.stringify(set);
    return !compare;
};

console.log(containsDuplicate([1, 2, 3, 1]))
