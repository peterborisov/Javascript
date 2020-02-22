function lowestPrices(args) {
    let map = new Map();

    for (let i = 0; i < args.length; i++) {
        const element = args[i];
        let splitedElement = element.split('|');
        let town = splitedElement[0];
        let item = splitedElement[1];
        let price = Number(splitedElement[2]);
        if (!map.has(item)) {
            map.set(item, new Map());
        }

        map.get(item).set(town, price);
    }

    for (let [item, innerMap] of map) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let townLowestPrice = "";
        for (let [town, price] of innerMap) {
            if (price < lowestPrice) {
                lowestPrice = price;
                townLowestPrice = town;
            }
        }

        console.log(`${item.trim()} -> ${lowestPrice} (${townLowestPrice.trim()})`);
    }
}

lowestPrices(
    ['Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10']);