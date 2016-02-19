function getVowels() {
    var vowelsCount = 0;

    var string = prompt("Enter your string").toString();
    for (var i = 0; i <= string.length - 1; i++) {

        if (string.charAt(i) == "a" ||
            string.charAt(i) == "e" ||
            string.charAt(i) == "i" ||
            string.charAt(i) == "o" ||
            string.charAt(i) == "u") {
            vowelsCount ++;
        }
    }
    document.getElementById("demo").innerHTML="Vowels on this string are :"+ vowelsCount;
}
