/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
    if (n < 1) return n;

    const nums = [0, 1];
    let i = 1;
    while (nums.length < n + 1) {
        nums[i * 2] = nums[i];
        if (nums.length === n + 1) break;
        nums[i * 2 + 1] = nums[i] + nums[i + 1];
        i++;
    }
    return Math.max(...nums);

};

console.log(getMaximumGenerated(7))