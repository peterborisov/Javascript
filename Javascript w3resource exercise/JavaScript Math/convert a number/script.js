function main() {
    var input = prompt("enter your number : ")
    document.write("Decimal  : " + parseInt(input,10).toString(10));
    document.write('<br/>');
    document.write("Hex : " + parseInt(input,10).toString(16));
    document.write('<br/>');
    document.write("Octal : " + parseInt(input,10).toString(8));
    document.write('<br/>');
    document.write("Binary : " + parseInt(input,10).toString(2));}
