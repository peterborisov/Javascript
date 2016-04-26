function main(arr) {
    var lenght = arr[0];
    var p1 = [];
    var p2 = [];
    var p3 = [];
    var p4 = [];
    var p5 = [];
    var p1Count = 0;
    var p2Count = 0;
    var p3Count = 0;
    var p4Count = 0;
    var p5Count = 0;
    for (var i = 1; i < arr.length; i++) {
        var obj = parseInt(arr[i]);
        if (obj > 0 && obj <= 199) {
            p1.push(obj);
            p1Count++;
        }
        else if (obj >= 200 && obj <= 399) {
            p2.push(obj);
            p2Count++;
        }
        else if (obj >= 400 && obj <= 599) {
            p3.push(obj);
            p3Count++;
        }
        else if (obj >= 600 && obj <= 799) {
            p4.push(obj);
            p4Count++;
        }
        else {
            p5.push(obj);
            p5Count++;
        }
    }

    var p1Result = p1Count / lenght * 100;
    var p2Result = p2Count / lenght * 100;
    var p3Result = p3Count / lenght * 100;
    var p4Result = p4Count / lenght * 100;
    var p5Result = p5Count / lenght * 100;
    console.log(p1Result);
    console.log(p2Result);
    console.log(p3Result);
    console.log(p4Result);
    console.log(p5Result);
}
var input = [
    '9',
    '367',
    '99',
    '200',
    '799',
    '999',
    '333',
    '555',
    '111',
    '9'
];
main(input);