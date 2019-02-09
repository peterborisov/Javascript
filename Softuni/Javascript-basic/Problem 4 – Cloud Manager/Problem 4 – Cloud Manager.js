function main(arr) {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i].split(/\s+/);
        var data = obj[0];
        var format = obj[1];
        var size = parseFloat(obj[2]);
        if (!result[format]) {
            result[format] = {files: [], memory: []};
        }
        result[format].files.push(data);
        result[format].memory.push(size);
    }
    for (var key in result) {
        result[key].memory = getAvg(result[key].memory);
        result[key].files.sort();
    }

    var output = [];
    var keys = Object.keys(result);
    keys.sort();
    for (var i = 0; i < keys.length; i++) {
        output[keys[i]] = result[keys[i]];
    }
    var outputObj = toObject(output);
    console.log(JSON.stringify(outputObj));

    function getAvg(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum.toFixed(2);
    }

    function toObject(arr) {
        var obj = {};
        for (var key in arr) {
            obj[key] = arr[key];
        }
        return obj;
    }
}
var input = [
    'sentinel .exe 15MB',
    'zoomIt .msi 3MB',
    'skype .exe 45MB',
    'trojanStopper .bat 23MB',
    'kindleInstaller .exe 120MB',
    'setup .msi 33.4MB',
    'winBlock .bat 1MB',

];
main(input);