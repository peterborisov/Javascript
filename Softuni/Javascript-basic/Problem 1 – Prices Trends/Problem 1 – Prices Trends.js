function main(input) {
    var prices = input.map(Number);
    console.log("<table>");
    console.log("<tr><th>Price</th><th>Trend</th></tr>");
    var prevPrice = undefined;
    for (var i = 0; i < prices.length; i++) {
        var price = prices[i];
        var priceStr = price.toFixed(2);
        if (prevPrice == undefined || priceStr == prevPrice) {
            var trend = "fixed.png";
        } else if (price < prevPrice) {
            var trend = "down.png";
        } else {
            var trend = "up.png";
        }
        console.log("<td><td>" + priceStr + "</td><td><img src=\"" + trend + "\"/></td></td>");
        prevPrice = priceStr;
    }
    console.log("</table>");
}

var input = ['36.333', '36.5', '37.019', '35.4', '35', '35.001', '36.225'];
main(input);