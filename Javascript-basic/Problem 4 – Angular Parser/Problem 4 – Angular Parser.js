function main(arr) {
    var data = {};
    arr.forEach(function (el) {
        var lineArgs = el.trim().split(/&/g);
        var tockens = lineArgs[0].split(/=/g);
        var task = tockens[1].substring(1,tockens[1].length-1);
        console.log(tockens[0])
        if(tockens[0]=='&app') {
            if (!data[task]) {
                data[task] = {
                    controllers: [],
                    models: [],
                    views: []
                };
            }
        }
        data[task].controllers.push({
            name: tockens[1]
        });
        if(tockens[0]=='$model') {
            data[task].models += (tockens[1]);
        }
        if(tockens[0]=='$view') {
            data[task].views += (tockens[1]);

        }
    });

    Object.keys(data).forEach(function (key) {
        data[key].models = parseFloat((data[key].models / data[key].controllers.length).toFixed(2));
        data[key].controllers.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    });

    var keysSorted = Object.keys(data).sort(function (a, b) {
        if (data[a].models == data[b].models) {
            return data[a].views - data[b].views;
        }

        return data[b].models - data[a].models;
    });

    var sortedObject = {};
    keysSorted.forEach(function (el) {
        sortedObject[el] = data[el];
    });

    console.log(JSON.stringify(sortedObject));
}
var input = [
    "$app='MyApp'",
    "$controller='My Controller'&app='MyApp'",
    "$model='My Model'&app='MyApp'",
    "$view='My View'&app='MyApp'"
];
main(input);