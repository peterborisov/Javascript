function main(arr) {

    var area=((parseInt(arr[0]*parseInt(arr[0])))-(parseInt(arr[3]*parseInt(arr[4]))))/(parseFloat(arr[1]*parseFloat(arr[2])));
    var time=parseFloat(area)*(parseFloat(0.20));
    console.log(area);
    console.log(time);
}
var input=[
    '40',
    '0.8',
    '0.6',
    '3',
    '5'
];
main(input);