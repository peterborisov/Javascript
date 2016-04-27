function main(arr) {
    var pool = parseFloat(arr[1] * [arr[3]]) + (parseFloat(arr[2] * (arr[3])));
    var full=(pool/arr[0])*100;
    var pipe1=(parseFloat(arr[1]*arr[3])/full)*10;
    var pipe2=(parseFloat(arr[2]*arr[3])/full)*10;
    var over=pool-arr[0];
if(full<arr[0]){
    console.log('The pool is '+full+'% full. Pipe 1: '+(Math.round(pipe1)+'%. Pipe 2: '+Math.round(pipe2)+'%.'))
}else{
    console.log('For '+arr[3]+' hours the pool overflows with '+over+' liters.')
}
}
var input = [
    '100',
    '100',
    '100',
    '2.5'
];
main(input);