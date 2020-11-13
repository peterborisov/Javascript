/**
 * @param {number} rowIndex
 * @return {number[]}
 */
let getRow = (rowIndex) => {
    let row = [];
    rowIndex < 0 ? row : '';
    row.push(1);
    for (let i = 1; i <= rowIndex; i++) {
        for (let j = row.length - 1; j > 0; j--) {
            row[j] = row[j - 1] + row[j];
        }
        row.push(1);
    }

    return row;
};

console.log(getRow(4))