function main(){
    var input=prompt("Enter two sides of triangle : ").split(" ");
    var one=input[0];
    var two=input[1];
    document.write("Hypotenuse = "+Math.sqrt(one*one+two*two));
}
