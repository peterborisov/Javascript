function main(arr){
    for (var i = 0; i < arr.length; i++) {
        var obj =Date.parse(arr[i]);
        console.log(obj)
    }
}
var input=[
    '22.03.2014',
    '17.05.1933',
    '10.10.1954'
];
main(input);