//Anagrams are words or phrases that contain the same number of characters.

//Solution 1
const counter = string => {
    const jsonTable = {};

    for (let char of string.replace(/\W/g, "").toLowerCase()) {
        jsonTable[char] = jsonTable[char] + 1 || 1;
    }

    return jsonTable;
};

const anagrams = (stringA, stringB) => {
    const charCountA = counter(stringA);
    const charCountB = counter(stringB);

    if (Object.keys(charCountA).length !== Object.keys(charCountB).length) {
        console.log(charCountA.entries())
        return false;
    }

    for (let char in charCountA){
        if (charCountA[char] !== charCountB[char]) return false;
    }

    return true;
};

//Solution 2
const sorting = string => string.replace(/\W/g, "").toLowerCase().split("").sort().join("");
const isAnagram = (stringA, stringB) => sorting(stringA) === sorting(stringB);

console.log(anagrams("hello world", "world hello"))
console.log(isAnagram("hello world", "world hello"))