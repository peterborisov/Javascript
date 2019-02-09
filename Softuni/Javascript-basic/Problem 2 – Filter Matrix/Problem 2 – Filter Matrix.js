function main(arr) {
    var array=[];
    var sequence=parseInt(arr.pop())
    for (var i = 0; i < arr.length-1; i++) {
        var obj = arr[i].split(' ');
        for (var j = 0; j < obj.length; j++) {
            var obj1 = obj[j];
            array.push(obj1)
        }
    }
    console.log(sequence)

}

var input = [
    '3 3 3 2 5 9 9 9 9 1 2',
    '1 1 1 1 1 2 5 8 1 1 7',
    '7 7 1 2 3 5 7 4 4 1 2',
    '2'

];
main(input);