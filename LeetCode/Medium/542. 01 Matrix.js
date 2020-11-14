/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var updateMatrix = function(matrix) {
    let dp = Array.from({length: matrix.length}, ()=>new Array(matrix[0].length).fill(Infinity));
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                dp[i][j] = 0
                continue;
            } 
            let top =  (i-1>=0) ? dp[i-1][j] : Infinity
            let left = (j-1 >=0) ? dp[i][j-1] : Infinity
            dp[i][j] = Math.min(dp[i][j], top+1, left+1)
        }
    }
    
    for(let i = matrix.length-1; i >=0; i--){
        for(let j = matrix[0].length-1; j >= 0; j--){
            if(matrix[i][j] === 0) continue;
            let down =  (i+1 < matrix.length) ? dp[i+1][j] : Infinity
            let right = (j+1 < matrix[0].length) ? dp[i][j+1] : Infinity
            dp[i][j] = Math.min(dp[i][j], down+1, right+1)
        }
    }
    return dp
};

console.log(updateMatrix(
    [[0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]]
))