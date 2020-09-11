//Solution 1
const redusedWay = s => {
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
    const stringCharacters = s.toLowerCase().split("")
        .reduce((chars, char) => validCharacters.indexOf(char) > -1 ?
            chars.concat(char) : chars, []
        );
    return stringCharacters.join("") === stringCharacters.reverse().join("");
};

//Solution 2
const everyWay = s => s.split("").every((el, index) => el === s[s.length - 1 - index]);

//Solution 3
const cleanerWay = s => {
    const regex = s.replace(/\W/g, "").toLowerCase();
    return (
        regex === regex.split("").reverse().join("")
    );
};

console.log(redusedWay('aba'))
console.log(everyWay('aba'))
console.log(cleanerWay('aba'))