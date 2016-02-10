function main(input) {
    var startNum = Number(input[0]);
    var endNum = Number(input[1]);
    console.log("<ul>");
    for (var num = startNum; num <= endNum; num++) {
        if (isDoubleRakiyaNum(num)) {
            console.log("<li>" +
                "<span class='rakiya'>" + num + "</span>" +
                "<a href=\"view.php?id=" + num +">View</a>" +
                "</li>")
        } else {
            console.log("<li><span class='num'>" + num + "</span></li>")
        }
    }
    console.log("</ul>");

    function isDoubleRakiyaNum(num) {
        var numStr = '' + num;
        var existingPairs = { };
        for (var i = 1; i < numStr.length; i++) {
            var pair = numStr.substr(i - 1, 2);
            if (existingPairs[pair]) {
                if (i - existingPairs[pair] >1) {
                    return true;
                }
            } else {
                existingPairs[pair] = i;
            }
        }
        return false;
    }
}
var input = [55555, 55560];
main(input);