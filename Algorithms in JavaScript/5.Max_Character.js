//Solution 1
const maxChar = s => {
    const characters = {};

    for (let character of s)
        characters[character] = characters[character] + 1 || 1;

    let maxCount = 0;
    let maxCharacter = null;

    for (let character in characters) {
        if (characters[character] > maxCount) {
            maxCount = characters[character];
            maxCharacter = character;
        }
    }

    return maxCharacter;
};

//Solution 2
const maxCharMap = string => {
    const sortValues = (a, b) => (a[1] < b[1] && 1) || (a[1] === b[1] ? 0 : -1)
    let map = new Map();

    for (let el of string) {
        !map.has(el) ? map.set(el, 1) : map.set(el, map.get(el) + 1);
    }
    map = new Map([...map].sort(sortValues))

    console.log('By values:', map);
    console.log(map.entries().next().value[0]);
}
console.log(maxChar('fergwergwqqqq'))
maxCharMap('fergwergwqqqq');