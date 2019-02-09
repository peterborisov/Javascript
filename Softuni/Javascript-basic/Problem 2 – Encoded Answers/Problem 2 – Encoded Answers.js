function main(arr) {
    var answers = [];
    var answerA = 0;
    var answerB = 0;
    var answerC = 0;
    var answerD = 0;
    for (var i = 1; i < arr.length; i++) {
        var obj = arr[i];
        if (obj >= 4) {
            switch (obj % 4) {
                case 0:
                    answers.push('a');
                    answerA++;
                    break;
                case 1:
                    answers.push('b');
                    answerB++;
                    break;
                case 2:
                    answers.push('c');
                    answerC++;
                    break;
                case 3:
                    answers.push('d');
                    answerD++;
                    break;
            }
        } else if (obj == 0) {
            answers.push('a');
            answerA++;
        } else if (obj == 1) {
            answers.push('b');
            answerB++;
        } else if (obj == 2) {
            answers.push('c');
            answerC++;
        } else if (obj == 3) {
            answers.push('d');
            answerD++;
        }
    }
    console.log(answers.join(' '));
    console.log('Answer A: '+answerA);
    console.log('Answer B: '+answerB);
    console.log('Answer C: '+answerC);
    console.log('Answer D: '+answerD)
}
var input = [
    '10',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11'
];
main(input);