//@ts-check

/*1.	Fruit
Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams and another number for the price per kilogram. 
Print the following text on the console:  
'I need ${money} to buy {weight} kilograms {fruit}.'
Print the weight and the money rounded to two decimal places.
The input comes as three arguments passed to your function.
*/

function fruit(...args) {
    let kilograms = (args[1] / 1000);
    console.log(`I need $${(kilograms * args[2]).toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${args[0]}.`)
}

fruit('orange', 2500, 1.80);


/*
2.	Greatest Common Divisor - GCD
Write a function that takes two positive numbers as input and compute the greatest common divisor.	
The input comes as two positive integer numbers.
*/

function commonDivisor(a, b) {
   return !b ? a : commonDivisor(b, a % b);
}

console.log(commonDivisor(15, 5))

/*3.	Same Numbers
Write a function that takes an integer number as an input and check if all the digits in a 
given number are the same or not.
Print on the console true if all numbers are same and false if not. On the next line print 
the sum of all the digits.
The input comes as an integer number.
*/

function sameNumber(n) {
    console.log((n.toString().substr(0, 1) === n.toString().substr(1, 1)));
    n = Array.from(n.toString()).map(Number);
    console.log(n.reduce((a, b) => a + b, 0));
}

sameNumber(1234)


/*4.	Time to Walk
Write a function that calculates how long it takes a student to get to university. 
The function takes three numbers:
•	The first is the number of steps the student takes from their home to the university
•	Тhe second number is the length of the student's footprint in meters
•	Тhe third number is the student speed in km/h
Every 500 meters the students a rest and takes a 1 minute break.
Calculate how long the student walks from home to university and print on the console the result in the following format: 'hours:minutes:seconds'.
The input comes as three numbers.
*/

function timeToWalk(...args) {
    let meters = (args[0] * args[1]);
    let mps = args[2] / 3.6;
    let time = meters / mps;
    let additionalMinutes = Math.floor(meters / 500);

    let hour = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let sec = Math.round(time - (minutes * 60));

    console.log((hour < 10 ? "0" : "") + hour + ":" + 
    (minutes + additionalMinutes < 10 ? "0" : "") + (minutes + additionalMinutes) + ":" + 
    (sec < 10 ? "0" : "") + sec);
}

timeToWalk(4000, 0.60, 5);

/*5.	Calorie Object
Write a function that composes an object by given properties. 
The input comes as an array of strings. Every even index of the array represents the name of the food. 
Every odd index is a number that is equal to the calories in 100 grams of the given product. 
Assign each value to its corresponding property and print it on the console.
The input comes as an array of string elements.
*/

function calorieObject(args) {
    let result = {};
    for (let i = 0; i < args.length; i+=2) {
        const product = args[i];
        const calories = args[i + 1];
        result[product] = +calories;
    }
    console.log(result)
}

calorieObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52])

/*
6.	Road Radar
Write a function that determines whether a driver is within the speed limit. 
You will receive the speed and the area. Each area has a different limit: 
•	On the motorway the limit is 130 km/h
•	On the interstate the limit is 90 km/h
•	In the city the limit is 50 km/h 
•	Within a residential area the limit is 20 km/h
If the driver is within the limits, there should not be any output. 
If the driver is over the limit, however, your function should print the severity of the infraction. 
For speeding up to 20 km/h over the limit, speeding should be printed 
For speeding up to 40 km/h over the limit, excessive speeding should be printed
For anything else, reckless driving should be printed
The input comes as an array of elements. The first element is the current speed (number),  
the second element is the area.
*/

function roadRadar(args) {
    let limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    let diff = args[0] - limits[args[1]];
    console.log(args[0] < limits[args[1]] ? '' : diff <= 20 ?
        'speeding' : diff <= 40 ? 'excessive speeding': 'reckless driving')
}

roadRadar([200, 'motorway'])


/*7.	Cooking by Numbers
Write a program that receives a number and a list of five operations. 
Perform the operations sequentially by starting with the input number and using the result of 
every operation as starting point for the next one. Print the result of every operation in order. 
The operations can be one of the following:
•	chop - divide the number by two
•	dice - square root of number
•	spice - add 1 to number
•	bake - multiply number by 3
•	fillet - subtract 20% from number
The input comes as an array of 6 string elements. The first element is the starting point and 
must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.
*/

function cookingByNumbers(args) {
    let operation = {
        'chop': function (num) { return num / 2 },
        'dice': function (num) { return Math.sqrt(num) },
        'spice': function (num) { return ++num },
        'bake': function (num) { return num * 3 },
        'fillet': function (num) { return (num / 5) * 4 }
    }

    let number = args.shift();
    for (let el of args) {
        number = operation[el](number);
        console.log(number);
    }
}

cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])