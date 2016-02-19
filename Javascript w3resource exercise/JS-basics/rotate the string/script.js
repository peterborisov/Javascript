function main() {
    var p = prompt("Enter your string");
        var o = '';
        for (var i = p.length - 1; i >= 0; i--) {
            o += p[i];
        }
        document.getElementById("demo").innerHTML = "Rotate string is :" + o;
}