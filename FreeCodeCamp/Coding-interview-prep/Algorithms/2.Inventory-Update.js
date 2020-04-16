function getIndexToIns(arr, num) {
    if (!arr.includes(num)) {
        arr.push(num);
        arr.sort();
    }
    num = arr.indexOf(num);
    return num;
}

console.log(getIndexToIns([3, 10, 5], 3));
