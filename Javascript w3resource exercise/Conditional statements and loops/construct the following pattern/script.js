function main() {
    var n = prompt("enter your number");
    document.write("<center>");
    var x;
    var y;
    var chr = '';
    for (x = 0; x <= n; x++) {
        for (y = 0; y < x; y++) {
            chr += ("*");
        }
        document.write(chr);
        document.write("<br/>");
        chr = '';
    }

}
