let reverce = (n) => {
    n = n.toString().split(',').reverse();
    return n.map(el => {
        return +el
    })
}

console.log(reverce([1, 4, 3, 2]).join(' '))