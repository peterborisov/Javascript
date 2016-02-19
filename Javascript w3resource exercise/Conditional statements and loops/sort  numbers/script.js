function sort() {
    var input = prompt("Enter your numbers").split(" ");
    var arr = [];
    for (var i = 0; i < input.length; i++) {
        var obj = input[i];
        arr.push(obj);
    }
    arr.sort(function(a, b){return a-b});
    document.getElementById("demo").innerHTML = "Sorting numbers are: " + arr;
}