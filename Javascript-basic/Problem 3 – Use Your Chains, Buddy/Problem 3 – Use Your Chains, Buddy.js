function main(arr) {
    var input = arr[0];
    var regex = /<p>(.*?)<\/p>/g;
    var matchArray;
    var output = "";
    while (matchArray = regex.exec(input)) {
        var match = matchArray[1];
        match = match.replace(/[^a-z0-9]+/g, " ");
        for (var c in match) {
            var newChar;
            var currentChar = match.charCodeAt(c);
            if (currentChar >= 97 && currentChar <= 109) {
                newChar = currentChar + 13;
            } else if (currentChar >= 110 && currentChar <= 122) {
                newChar = currentChar - 13;
            }else
            {
                newChar=currentChar;
            }
            output += String.fromCharCode(newChar);
        }
    }
    console.log(output);
}

var inputCon = ["<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&**** </p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>"];
main(inputCon);