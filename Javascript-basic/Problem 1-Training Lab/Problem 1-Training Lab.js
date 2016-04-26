function main(arr) {
var long=Math.floor((arr[0]*100)/120);
    var widht=Math.floor(((arr[1]*100)-100)/70);
console.log((long*widht)-3)
}
var input=[
    '8.4','5.2'
];
main(input);