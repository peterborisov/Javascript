function main(array) {
    var bladeType = '';
    var type = '';

    console.log("<table border=\"1\">");
    console.log("<thead>")
    console.log("<tr><th colspan=\"3\">Blades</th></tr>");
    console.log("<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>");
    console.log("</thead>");
    console.log("<tbody>");

    for (var i = 0; i < array.length; i++) {
        var obj = Math.floor(array[i]);
        var typeResult = obj % 5;
        if (obj > 10) {

            switch (typeResult) {
                case 1:
                    type = 'blade';
                    break;
                case 2:
                    type = 'quite a blade';
                    break;
                case 3:
                    type = 'pants-scraper';
                    break;
                case 4:
                    type = 'frog-butcher';
                    break;
                case 0:
                    type = '*rap-poker';
                    break;
                default :
                    break;
            }
            if (obj > 40) {
                bladeType = "sword";
            } else {
                bladeType = "dagger";
            }
            console.log('<tr><td>' + obj + '</td><td>' + bladeType + '</td><td>' + type + '</td></tr>');
        }
    }
    console.log("</tbody>");
    console.log("</table>");
}
var input = [17.8, 19.4, 13, 55.8, 126.96541651, 3];
main(input);