/**
 * @param {string} s
 * @return {number}
 */
let firstUniqChar = (s) => {
    let json = {}
    s.split('').map(el => { json[el] = (json[el] || 0) + 1; });
    json = Object.entries(json).sort((a, b) => a[1] - b[1]);
    
    return s === '' || json[0][1] !== 1 ?
        -1 : s.indexOf(json[0][0])
};

console.log(firstUniqChar(''))