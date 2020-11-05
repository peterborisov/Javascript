/**
 * @param {number} n
 * @return {number}
 */
let memo = [0, 1, 2];
let climbStairs = (stairs) => {
    return !memo[stairs] ? memo[stairs] = climbStairs(stairs - 1) + climbStairs(stairs - 2) : memo[stairs];
};

console.log(climbStairs(44))