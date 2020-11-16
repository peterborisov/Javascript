function hourglassSum(...arr) {
    let count = -63,
        sum = 0;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            // 0 0 0
            //   0  
            // 0 0 0
            sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
                + arr[i + 1][j + 1]
                + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

            if (sum > count) {
                count = sum
            }
        }
    }
    return count;
};

console.log(hourglassSum(
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
))