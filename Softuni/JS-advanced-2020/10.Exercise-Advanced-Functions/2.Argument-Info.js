function argumentInfo(...args) {
    let map = new Map();
    for (el of args) {
        let count = 1;
        if (!map.has(typeof (el))) {
            map.set(typeof (el), count);
        } else if (map.has(typeof (el))) {
            count++;
            map.get(typeof (el), map.set(typeof (el), count));
        }
        console.log(`${typeof (el)}: ${el}`);
    }
    for ([key, value] of map) {
        console.log(`${key} = ${value}`)
    }
}

argumentInfo(
    'cat', 'cat', 42, function () { console.log('Hello world!'); }
);