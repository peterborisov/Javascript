/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = (...args) => {
    let result = args.map(el => {
        el = el.split('').sort((a, b) => a.localeCompare(b)).join('');
        return el;
    })
    return result[0] === result[1];
};

console.log(isAnagram("anagram", "nagaram"))