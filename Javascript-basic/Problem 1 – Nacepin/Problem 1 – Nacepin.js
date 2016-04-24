function main(arr) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        var usWeight = parseFloat(arr[1]);
        var ukWeight = parseFloat(arr[3]);
        var chinesWeight = parseFloat(arr[5]);

        var usPrice = ((parseFloat(arr[0]) / 0.58) / usWeight).toFixed(2);
        array.push(usPrice);
        var ukPrice = ((parseFloat(arr[2]) / 0.41) / ukWeight).toFixed(2);
        array.push(ukPrice);
        var chinesPrice = ((parseFloat(arr[4]) * 0.27) / chinesWeight).toFixed(2);
        array.push(chinesPrice);
    }
    var min = Math.min.apply(null, array),
        max = Math.max.apply(null, array);

    if (min == usPrice) {
        console.log('US store. ' + min + ' lv/kg')
    }
    if (min == ukPrice) {
        console.log('UK store. ' + min + ' lv/kg')
    }
    if (min == chinesPrice) {
        console.log('Chinese store. ' + min + ' lv/kg')
    }
    console.log('Difference ' + (parseFloat(max) - parseFloat(min) ) + ' lv/kg')
}
var input = ['10', '1', '9', '2', '8', '3'];
main(input);