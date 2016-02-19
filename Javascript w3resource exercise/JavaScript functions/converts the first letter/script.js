function main() {
    var myString = prompt("enter");
    var capitalize = function(str) {
        var strArr = str.split(' ');
        var newArr = [];
        for (var i = 0; i < strArr.length; i++) {
            newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
        };
        return newArr.join(' ')
    }
    var newString = capitalize(myString);
    document.getElementById("demo").innerHTML=newString;
}
