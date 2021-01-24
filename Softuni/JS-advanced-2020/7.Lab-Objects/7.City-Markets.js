function cityMarkets(args) {
    let result = new Map();
    args.map(el => {
        let [town, item, amountOfSales, priceForOneUnit] = el.split(/[->:]/).filter(el => el !== '');
        let totalAmount = +(amountOfSales) * +(priceForOneUnit);
        !result.has(town) ? result.set(town, new Map()) : '';
        !result.get(town).has(item) ? result.get(town).set(item, 0) : '';
        result.get(town).set(item, result.get(town).get(item) + totalAmount);
    })

    result.forEach((key, value) => {
        console.log(`Town - ${value}`);
        key.forEach((key, value) => {
            console.log(`$$$${value.trim()} : ${key}`);
        })
    })
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
