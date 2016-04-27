function main(arr) {

var result=parseFloat(((parseFloat(arr[0])*parseFloat(arr[2]))+(parseFloat(arr[1])*parseFloat(arr[3])))/1.94);
    console.log(result);
}
var input=[
    '1.5',
    '2.5',
    '10',
    '10'
];
main(input);