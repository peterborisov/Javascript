function main(array) {
    var name, luggageName, isFood, isDrink, isFragile, weight, transferredWith;
    var type;
    var result = {};
    var sorting = array.pop(array.length - 1);

    for (var line in array) {
        var lineArray = array[line].split(/\.*\*\.*/g);
        name = lineArray[0];
        luggageName = lineArray[1];
        isFood = lineArray[2];
        isDrink = lineArray[3];
        isFragile = lineArray[4];
        weight = Number(lineArray[5]);
        transferredWith = lineArray[6];

        type = "other";
        if (isFood == "true") {
            type = "food";
        } else if (isDrink == "true") {
            type = "drink";
        }


        if (!result[name]) {
            result[name] = {};
        }
        result[name][luggageName] = {
            kg: weight,
            fragile: isFragile == "true",
            type: type,
            transferredWith: transferredWith
        };
    }
    var touristNames = Object.keys(result);
    switch (sorting) {
        case 'luggage name':
            for (var i in touristNames) {
                var currentTourist = result[touristNames[i]];
                var luggageNames = Object.keys(currentTourist);
                luggageNames.sort();
                var sortedTourist = {};
                for (var j in luggageNames) {
                    sortedTourist[luggageNames[j]] = currentTourist[luggageNames[j]];
                }
                result[touristNames[i]]=sortedTourist;
            }
            break;
        case 'weight':

            break;
        default :
            break;
    }

    console.log(JSON.stringify(result));

}
var input = ['Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
    ' Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
    ' Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    ' Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    ' Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    ' Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'luggage name'
];
main(input);