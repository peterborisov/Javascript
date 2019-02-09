function main(arr) {
    var victor = 0;
    var naskos = 0;
    var whiteCount = 0;
    var darkCount = 0;

    var currentWhite = 0;
    var currentDark = 0;

    var firstLine = arr[0].split(' ');
    if (firstLine != "") {
        if (firstLine[1] == 'white') {
            whiteCount++;
            victor += parseFloat(firstLine[0] * 60);
            currentWhite=parseFloat((firstLine[0]*60))
        }
        if (firstLine[1] == 'dark') {
            darkCount++;
            naskos += parseFloat(firstLine[0] * 60);
            currentDark=parseFloat((firstLine[0]*60))
        }
    }

    for (var i = 1; i < arr.length; i++) {
        var obj = arr[i].split(' ');
        if (obj != "") {
            switch (obj[1]) {
                case'white':
                    if (parseFloat(obj[0] * 60) === currentWhite) {
                        whiteCount++;
                    } else {
                        whiteCount = 1;
                    }
                    if (whiteCount === 2) {
                        victor += ((parseFloat(obj[0] * 60) * parseFloat(2.75)));
                        currentWhite = parseFloat(obj[0] * 60)*parseFloat(2.75);

                        whiteCount = 0;
                    } else {
                        victor += parseFloat(obj[0] * 60);
                        currentWhite = parseFloat(obj[0] * 60);
                    }
                    break;
                case'dark':

                    if (parseFloat(obj[0] * 60) === currentDark) {
                        darkCount++;
                    } else {
                        darkCount = 1;
                    }
                    if (darkCount === 5) {
                        naskos += (parseFloat(obj[0] * 60) * parseFloat(4.5));
                        currentDark = parseFloat(obj[0] * 60)*parseFloat(4.5);
                        darkCount = 1;
                    } else {
                        naskos += parseFloat(obj[0] * 60);
                        currentDark = parseFloat(obj[0] * 60);
                    }

                    break;
            }
        }
        firstLine = obj;
    }
    console.log('Winner - ' + (victor > naskos ? 'Vitkor' : 'Naskor'));
    console.log('Damage - ' + (victor > naskos ? victor : naskos));
}
var input = [
    // '5 white medenkas',
    // '5 dark medenkas',
    // '4 white medenkas'
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas'
];
main(input);
