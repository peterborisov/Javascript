//Algorithm Scripting: Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit = (9 / 5 * celsius) + 32;
    return fahrenheit;
}
convertToF(30);


//Algorithm Scripting: Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
reverseString("hello");


//Algorithm Scripting: Factorialize a Number
let factorialize = (n) => n > 0 ? n * factorialize(n - 1) : 1;
factorialize(5);


//Find the Longest Word in a StringPassed
function findLongestWordLength(str) {
    str = str.split(' ');
    str.sort((a, b) => {
        return b.length - a.length;
    })
    return str[0].length;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))


//Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let result = []
    arr.map(x => {
        result.push(Math.max(...x))
    })
    return result;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//Confirm the Ending
function confirmEnding(str, target) {
    return str.slice(-target.length) === target;
}
console.log(confirmEnding("Bastian", "n"));


//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";
}
console.log(repeatStringNumTimes("abc", 3));


//Truncate a String
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num).concat('...') : str;
}
console.log(truncateString(
    "A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length
))


//Finders Keepers
function findElement(arr, func) {
    let result = [];
    arr.map(x => {
        func(x) ? result.push(x) : '';
    })
    return result[0];
}
console.log(findElement([1, 3, 5, 7, 9, 11], num => num % 2 === 0));


//Boo who
function booWho(bool) {
    return (bool === true || bool === false) ? true : false;
}
console.log(booWho(null));


//Title Case a Sentence
function titleCase(str) {
    str = str.toLowerCase()
    let result = [];
    str.split(' ')
        .map(x => {
            result.push(x.charAt(0).toUpperCase() + x.slice(1));
        })
    return result.join(' ');
}
console.log(titleCase("sHoRt AnD sToUt"))


//Slice and Splice
function frankenSplice(arr1, arr2, n) {
    let front = arr2.slice(0, n);
    let back = arr2.slice(Math.max(arr2.length - n, 1));
    return [...front, ...arr1, ...back];
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))


//Falsy Bouncer
function bouncer(arr) {
    arr = arr.filter(Boolean);
    return arr;
}
console.log(bouncer([7, "ate", "", false, 9]));


// Where do I Belong
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => { return a - b });
    return arr.indexOf(num);
}
console.log(getIndexToIns([40, 60], 50));


//Mutations
function mutation(arr) {
    let [a, b] = arr;
    let result = [];
    b.toLowerCase().split('').map(x => {
        result.push(a.toLowerCase().includes(x));
    })
    return result.every(v => v === true)
}
console.log(mutation(["heLlo", "Hello"]));


//Chunky Monkey
function chunkArrayInGroups(arr, size) {
    let masterArr = [];
    let item = 0;
    while (item < arr.length) {
        masterArr.push(arr.slice(item, item += size));
    }
    return masterArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
