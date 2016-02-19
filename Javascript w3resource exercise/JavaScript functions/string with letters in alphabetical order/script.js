function main() {
    var input = prompt("Enter your string");
    var arr=[];
    for (var i = 0; i < input.length; i++) {
        var obj = input[i];
        arr.push(obj);
    }
    arr.sort();
    document.getElementById("demo").innerHTML="New string is : "+arr;
}