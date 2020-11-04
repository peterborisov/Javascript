/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = (...args) => {
    let result = new Set();
    args[1].map(el => {
        new Set(args[0]).has(el) ? result.add(el) : ''
    })
    return Array.from(result)
};

console.log(intersect([1, 2, 2, 1], [2]))