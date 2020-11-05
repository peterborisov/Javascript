/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = (nums1, m, nums2, n) =>{
    while (n > 0) {
        nums1[m + n - 1] = (m === 0 || nums2[n - 1] > nums1[m - 1]) ?
            nums2[--n] :
            nums1[--m];
    }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))