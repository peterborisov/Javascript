function main(arr) {
   var gryffindorCount=0;
   var slytherinCount=0;
   var ravenclawCount=0;
   var hufflepuffCount=0;
    for (var i = 1; i < arr.length; i++) {
        var sum = 0;
        var capitalLetter='';
        var obj = arr[i];
        for (var j = 0; j < obj.length; j++) {
            var obj1 = obj[j];

            if (obj1 == obj1.toUpperCase()&&obj1 !=' ') {
              capitalLetter+=obj1;
            }

            sum += (obj1.charCodeAt(0))
        }
        sum = sum - 32;
        var divine = sum % 4;
        switch (divine) {
            case 0:
                console.log('Gryffindor ' + sum+capitalLetter);
                gryffindorCount++;
                break;
            case 1:
                console.log('Slytherin ' + sum+capitalLetter);
                slytherinCount++;
                break;
            case 2:
                console.log('Ravenclaw ' + sum+capitalLetter);
                ravenclawCount++;
                break;
            case 3:
                console.log('Hufflepuff ' + sum+capitalLetter);
                hufflepuffCount++;
                break;
        }
    }
    console.log()
console.log('Gryffindor: '+gryffindorCount);
console.log('Slytherin: '+slytherinCount);
console.log('Ravenclaw: '+ravenclawCount);
console.log('Hufflepuff: '+hufflepuffCount);
}
var input = ['3',
    'Harry Potter',
    'Draco Malfoy',
    'Hermione Granger'
];
main(input);