/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Input: "III"
Output: 3
*/
let romanToInt = (s) => {
    s = s.split('');
    let roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        let currEl = s[i],
            currValue = roman[currEl],
            next = s[i + 1],
            nextValue = roman[next];

        if (currValue < nextValue) {
            sum -= currValue;
        } else {
            sum += currValue;
        }
    }

    return sum;
}

console.log(romanToInt('IV'))



