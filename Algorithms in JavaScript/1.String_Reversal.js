
//Solution 1
const reversed = string =>
    string
        .split('')
        .reverse()
        .join('');

//Solution 2
const forOf = string => {
    let result = '';
    for (let character of string) result = character + result;
    return result;
};

//Solution 3
const redused = string =>
    string.split('').reduce((result, character) => character + result);

console.log(reversed('Hi'))
console.log(forOf('Hi'))
console.log(redused('Hi'))