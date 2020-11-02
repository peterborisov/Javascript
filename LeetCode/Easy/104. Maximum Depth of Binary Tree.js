/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//Solution with recursion
let maxDepth = (root) => {
    let recur = (el) => {
        if (!el) return 0;
        let a = recur(el.left)
        let b = recur(el.right)
        return a > b ? a + 1 : b + 1;
    }
    return recur(root)
}

console.log(maxDepth[3, 9, 20, null, null, 15, 7])