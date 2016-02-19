function longestWord() {
    var input = prompt("enter");
    var str = input.split(' ');
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    document.getElementById("demo").innerHTML = "The longest word is : " + word;
}
