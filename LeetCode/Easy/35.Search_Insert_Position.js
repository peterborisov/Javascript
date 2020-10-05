/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
Given a sorted array of distinct integers and a target value, 
return the index if the target is found. If not, return the index where it would 
be if it were inserted in order.
*/

function searchInsert(...args) {
    let arr = args[0],
        num = args[1];

    let insert = (el, arr) => {
        arr.push(el);
        arr.sort((a, b) => {
            return a - b;
        })
       return arr.indexOf(el)
    }

    return arr.includes(num) ? arr.indexOf(num) : insert(num, arr);
};

console.log(searchInsert([1,3,5,6], 2));
