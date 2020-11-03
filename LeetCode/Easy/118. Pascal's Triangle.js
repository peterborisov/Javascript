/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = (numRows) => {
    let result = [];
    for (var i = 0, l = numRows; i < l; i++) {
        var arr = [];
        arr[0] = arr[i] = 1;
        for (var j = 1; j < i; j++) {
            arr[j] = result[i - 1][j] + result[i - 1][j - 1];
        }
        result[i] = arr;
    }
    return result;
};

console.log(generate(5))