function townsToJson(args){
    let json = [];
    let reg = /\s*\|\s*/;

    for (let i = 1; i < args.length; i++) {
        const element = args[i].split(reg);
        let el = { 
            Town: element[1],
            Latitude: Number(parseFloat(element[2]).toFixed(2)), 
            Longitude: Number(parseFloat(element[3]).toFixed(2))};
        json.push(el)
    }

    console.log(JSON.stringify(json))
}

townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);