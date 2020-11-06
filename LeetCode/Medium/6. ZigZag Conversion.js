/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = (s, numRows) => {
    if (s.length <= numRows || numRows < 2) return s;
    let num = 2 * (numRows - 1),
        result = Array(numRows).fill(''),
        temp = 0;
    s.split('').map((el, index) => {
        temp = index % num;
        temp < numRows ? result[temp] += el : result[num - temp] += el;
    })
    return result.join('');
};

console.log(convert('PAYPALISHIRING', 4))