function Solution(str) {
    let reversed = str.split('').reverse().join('')
    return str === reversed;
}

console.log(Solution('racecar'))