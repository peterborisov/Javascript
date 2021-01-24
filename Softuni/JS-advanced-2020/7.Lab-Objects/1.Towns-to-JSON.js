function townsToJson(args) {
    args.shift();
    let result = [];
    let reg = /\s*\|\s*/;

    args.map(el => {
        el = el.split(reg).filter(e => e !== '');
        let [town, latitute, longitude] = el;
        let obj = {
            Town: town,
            Latitude:  +parseFloat(latitute).toFixed(2),
            Longitude: + +parseFloat(longitude).toFixed(2)
        };
        result.push(obj)
    })
    console.log(JSON.stringify(result));
}

townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);