function storeCatalog(args) {
    args.sort()
    let map = new Map();
    for (el of args) {
        let splitedEl = el.split(/s*:s*/);
        let letter = splitedEl[0][0];
        let word = splitedEl[0];
        let quantity = Number(splitedEl[1]);
        if (!map.has(letter)) {
            map.set(letter, new Map());
        }
        map.get(letter).set(word, quantity)
    }

    const sortedMap = [...map].sort();

    for (let [letter] of sortedMap) {
        console.log(`${letter}`);
        for (let [word, quantity] of map.get(letter)) {
            console.log(`  ${word.trim()}: ${quantity}`);
        }
    }
};

storeCatalog(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']
);