function main(string, boolean) {
    string.toLowerCase();
    var arr = string.split("");
    if (boolean === true) {
        arr = arr.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase())
        });
        string = arr.toString();
        string = string.replace(/,/g, "");
    }
    else {
        arr = arr.sort(function (a, b) {
            return b.toLowerCase().localeCompare(a.toLowerCase())
        });
        string = arr.toString();
        string = string.replace(/,/g, "");
    }

    console.log(string);
}

main('HelloWorld', true);
main('HelloWorld', false);
