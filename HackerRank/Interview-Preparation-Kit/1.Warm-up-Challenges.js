//Sock Merchant
//=================================
// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// For example, there are  socks with colors . There is one pair of color  and one of color . 
// There are three odd socks left, one of each color. The number of pairs is .

function sockMerchant(args) {
    let map = new Map();
    let count = 0;
    for (let el of args[1]) {
        !map.has(el) ? map.set(el, 1) : map.set(el, map.get(el) + 1);
    }
    map.forEach(el => {
        count += Math.floor(el / 2)
    })
    return count;
}
console.log('sockMerchant : ', sockMerchant([9, [10, 20, 20, 10, 10, 30, 50, 10, 20]]));


//Counting Valleys
//=================================
// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography.
// During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. 
// Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:
// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.
// For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. 
//Finally, he returns to sea level and ends his hike.

function countingValleys(n, s) {
    s = s.split('');
    let level = 0, countValey = 0;
    for (let el of s) {
        el === 'U' ? level++ : level--;
        el === 'U' && level === 0 ? countValey++ : ''
    }
    return countValey;
}
console.log('countingValleys : ', countingValleys(8, 'UDDDUDUU'))


//Jumping on the Clouds
//==================================
// Emma is playing a new mobile game that starts with consecutively numbered clouds. 
// Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or. 
// She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.
// For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from. 
// The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or. 
// The first path takes  jumps while the second takes.

function jumpingOnClouds(c) {
    let jumpCount = 0;
    let currentCloud = 0;

    while (currentCloud < c.length - 1) {
        if (c[currentCloud + 2] == 0) {
            currentCloud += 2;
        } else {
            currentCloud++;
        }
        jumpCount++;
    }
    return jumpCount;
}
console.log('jumpingOnClouds : ', jumpingOnClouds(0, 0, 0, 0, 1, 0))


//Repeated String
//===================================
// Lilah has a string, , of lowercase English letters that she repeated infinitely many times.
// Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.
// For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.

function repeatedString(s, n) {
    //RangeError: Invalid string length if use .repeat() and input 1000000000000
    // s = s.repeat((n / s.length )) + subStr;
    // let subStr = s.slice(0, n % s.length);
    // s = s.repeat((n / s.length )) + subStr;
    // return (s.match(/a/g) || []).length;

    let aCount = (s.match(/a/g) || []).length * Math.floor(n / s.length),
        remainder = n % s.length,
        remainderACount = (s.slice(0, remainder).match(/a/g) || []).length;

    return aCount + remainderACount;
}

console.log('repeatedString : ', repeatedString('a', 10000000000000000))