/**
 * @param {number[]} nums
 * @return {boolean}
 */
let find132pattern = (nums) => {
    for (let j = 0, min = Infinity; j < nums.length; j++) {
        min = Math.min(nums[j], min);
        if (min == nums[j]) continue;
        for (let k = nums.length - 1; k > j; k--) {
            if (min < nums[k] && nums[k] < nums[j]) return true;
        }
    }
    return false;
};

console.log(find132pattern([3, 1, 4, 2]))