//Given a string of words or phrases, count the number of vowels.

//Solution 1
const vowelsCounter = string => {
    let count = 0;
    const vowels = { 'a': 'a', 'e': 'e', 'i': 'i', 'o': 'o', 'u': 'u' }

    for (let letter of string.toLowerCase()) {
        if (vowels[letter]) count++;
    }
    return count;
};

//Solution 2
const vowels = string => {
    matches = string.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vowelsCounter('vowels'))
console.log(vowels('vowels'))
