function main() {
    var input = prompt("Enter your integer number : ");
    if (!+input)
        return false;
    var digits = String(+input).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    document.write("Year " + input + " in roman is : " + Array(+digits.join("") + 1).join("M") + roman);
}
