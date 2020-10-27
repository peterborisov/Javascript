//@ts-check

//Algorithm Scripting: Sum All Numbers in a Range
function sumAll(arr) {
    arr.sort((a, b) => a - b);
    let min = arr[0],
        max = arr[1];
    return (max * (max + 1) - (min - 1) * min) / 2;
}
sumAll([4, 1]);


//Diff Two Arrays
function diffArray(arr1, arr2) {
    let first = arr1.filter(x => !arr2.includes(x));
    let second = arr2.filter(x => !arr1.includes(x));
    return [...second, ...first];
}
diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]);


//Seek and Destroy
function destroyer(arr) {
    //solution 1
    // let elements = arr.shift();
    // arr.map(el => {
    //     elements = elements.filter(filterEl => filterEl !== el);
    // })
    // return elements;

    //solution 2
    // let args = [...arguments].slice();
    // return arr.filter(el => { return !args.includes(el) })
}
//solution 3
// const destroyer = (arr, ...elemsToRemove) => arr.filter(elem => !elemsToRemove.includes(elem));
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


//Wherefore art thou
function whatIsInAName(collection, source) {
    let sourceKeys = Object.keys(source);
    return collection.filter(obj => {
        return sourceKeys.every(key => {
            return obj[key] === source[key];
        });
    });
}

console.log(whatIsInAName([
    { "apple": 1, "bat": 2 },
    { "apple": 1 },
    { "apple": 1, "bat": 2, "cookie": 2 }],
    { "apple": 1, "cookie": 2 }))


//Spinal Tap Case
function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));


//Pig Latin
function translatePigLatin(str) {
    let firstLetter = str.split('').shift();
    let vowel = /[aeiou]/gi;
    let substr = /^([^aeiou]+)(.+)$/i;
    let consonant = (el) => {
        let result = el.match(substr);
        return result[2] + result[1] + 'ay';
    }
    firstLetter.match(vowel) ? str = str + 'way' : !str.match(vowel) ? str = str + 'ay' : str = consonant(str);
    return str
}

console.log(translatePigLatin("rhythm"));


//Search and Replace
function myReplace(str, before, after) {
    after = after.toLowerCase();
    /^[A-Z]/.test(before) ? after = after.charAt(0).toUpperCase() + after.slice(1) : '';
    return str.replace(before, after);
}

console.log(myReplace("I think we should look up there", "up", "Down"));


//DNA Pairing
function pairElement(str) {
    let pairs = { A: "T", T: "A", C: "G", G: "C" }
    return str.split('').map(el => [el, pairs[el]])
}

console.log(pairElement("ATCGA"));


//Missing letters
function fearNotLetter(str) {
    let compare = str.charCodeAt(0), missing;
    str.split("").map((letter, index) => {
        str.charCodeAt(index) === compare ? ++compare : missing = String.fromCharCode(compare);
    })
    return missing;
}

console.log(fearNotLetter("abce"));


//Sorted Union
function uniteUnique(...arr) {
    //Solution 1
    // arr = arr.reduce((a, b) => [...a, ...b], [])
    // arr = Array.from(new Set(arr))
    // return arr;

    //Solution 2
    return [...new Set([].concat(...arr))]
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


//Convert HTML Entities
function convertHTML(str) {
    let cymbols = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&apos;' };
    return str
        .split('')
        .map(el => cymbols[el] || el)
        .join('')
}
console.log(convertHTML("Dolce & Gabbana"));


//Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    if (num <= 0) return 0;
    const arrFib = [1, 1];
    let nextFib = 0
    while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
        arrFib.unshift(nextFib);
    }
    return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

console.log(sumFibs(10));


// Sum All Primes
function sumPrimes(num) {
    let sum = 0;
    const isPrime = num => {
        const boundary = Math.floor(Math.sqrt(num));
        for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
        return num >= 2;
    };

    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumPrimes(10));
