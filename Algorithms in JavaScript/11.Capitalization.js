//Solution 1
const capitalize = s => {
    const words = [];

    for (let word of s.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
};

//Solution 2
const _capitalize = s => {
    let title = s[0].toUpperCase();

    for (let i = 1; i < s.length; i++) {
        title += s[i - 1] === ' ' ? s[i].toUpperCase() : s[i];
    }

    return title;
};

console.log(capitalize('Should capitalize phrase'))
console.log(_capitalize('Should capitalize phrase'))