function large() {
    Array.prototype.max = function () {
        return Math.max.apply(Math, this)
    };
   var  myArray = prompt("Enter your numbers").split(" ");
    document.getElementById("demo").innerHTML = "Largest number is : " + myArray.max();
}