function main() {
    var input = prompt("enter")
    input = input.toLowerCase();
    var flag = true;
    var j;
    j = (input.length) - 1;
    var cnt = j / 2;
    for (i = 0; i < cnt + 1; i++, j--) {
        if (input[i] != input[j]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        document.getElementById("demo").innerHTML = "The word \"" + input + "\" is palindrome.";
    }
    else {
        document.getElementById("demo").innerHTML = "The word \"" + input + "\" is  NOT palindrome.";
    }
}