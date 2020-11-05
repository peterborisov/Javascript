/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let isSameTree = (p, q) => {
    return (p === null || q === null) ? p === q :
        (p.val !== q.val) ? false :
            isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
};

console.log(isSameTree([1, 2, 3], [1, 2, 3]))