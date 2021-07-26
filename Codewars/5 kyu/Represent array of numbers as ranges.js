// Should return a string representing the ranges
function toRange(arr) {
    return [...new Set(arr)]
        .sort((a, b) => a - b)
        .map((currValue, index, array) => {
            const prevValue = array[index - 1] + 1;
            const startingPoint = index === 0;
            return startingPoint ? currValue : (prevValue === +currValue) ? `_${currValue}` : `,${currValue}`
        })
        .join("")
        .split(",")
        .map(e => e.replace(/_.*_/, '_')) // replace digits between first and last _
        .join(",");
}

// Should return an array
function toArray(str) {
    if (str === "") return []
    return [].concat(...str.split(",")
        .map(e => e.split("_"))
        .map(e => Array.from(Array(e.slice(-1) - e[0] + 1), (_, k) => k + +e[0])));
}

console.log(toRange([3, 4, 5, 6, 9]))
console.log(toArray('3_6,9'))