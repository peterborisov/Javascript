function cityMarkets(args) {
    let map = new Map();

    let regex = /->/;
    for (let i = 0; i < args.length; i++) {
        const element = args[i];
        let splitedEement = element.split(regex),
            town = splitedEement[0],
            item = splitedEement[1],
            amountOfSales = splitedEement[2].split(':'),
            totalAmount = Number(amountOfSales[0] * Number(amountOfSales[1]));

        if (!map.has(town)) {
            map.set(town, new Map());
        }
        if (!map.get(town).has(item)) {
            map.get(town).set(item, 0);
        }
        map.get(town).set(item, map.get(town).get(item) + totalAmount);
    }

    for (let [town] of map) {
        console.log(`Town - ${town}`);
        for (let [item, totalAmount] of map.get(town)) {
            console.log(`$$$${item.trim()} : ${totalAmount}`);
        }
    }
}

cityMarkets(
    ['Sofia -> Laptops HP -> 200 : 2000',
        'Sofia -> Raspberry -> 200000 : 1500',
        'Sofia -> Audi Q7 -> 200 : 100000',
        'Montana -> Portokals -> 200000 : 1',
        'Montana -> Qgodas -> 20000 : 0.2',
        'Montana -> Chereshas -> 1000 : 0.3']);

// Town - Sofia
// $$$Laptops HP : 400000
// $$$Raspberry : 300000000
// $$$Audi Q7 : 20000000
// Town - Montana
// $$$Portokals : 200000
// $$$Qgodas : 4000
// $$$Chereshas : 300 */
