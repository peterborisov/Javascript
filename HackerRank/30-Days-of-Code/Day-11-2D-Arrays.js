function twoDArrays(...arr) {
    let result = arr.reduce((array, el, row) => {
        el.reduce((subArr, subeEl, col) => {
            (row < 4 && col < 4) ?
                array.push(
                    arr[row][col] + arr[row][col + 1] + arr[row][col + 2]
                    + arr[row + 1][col + 1]
                    + arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2]) : '';
        }, [])
        return array;
    }, [])
    console.log(Math.max(...result));
};
// 0 0 0
//   0  
// 0 0 0

twoDArrays(
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
)