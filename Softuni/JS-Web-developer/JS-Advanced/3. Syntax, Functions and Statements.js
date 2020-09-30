/*
1.	String Length
Write a JS function that takes three string arguments as an input. 

Calculate the sum of the length of the strings and the average length 
of the strings rounded down to the nearest integer.
The input comes as three string arguments passed to your function.
The output should be printed on the console on two lines.
*/

function stringLength(...args){
    let length = args.join().length - 2; 
    console.log(length);
    console.log(Math.floor(length / 3));
}

stringLength('chocolate', 'ice cream', 'cake')


/*2. Math Operations
Write a JS function that takes two numbers and a string as an input. 

The string may be one of the following: '+', '-', '*', '/', '%', '**'.  

Print on the console the result of the mathematical operation between 
both numbers and the operator you receive as a string.
The input comes as two numbers and a string argument passed to your function.
The output should be printed on the console.
*/

function operations(...arg) {
    console.log(eval(`${arg[0]} ${arg[2]} ${arg[1]}`));
}

operations(5, 6, '+');


/*3.	Sum of Numbers N…M
Write a JS function that takes two numbers n and m as an input and prints the 
sum of all numbers from n to m.
The input comes as two string elements that need to be parsed as numbers.
The output should return the sum.
*/

function sumOfRange(start, end) {
    start = +start;
    end = +end;
    let sum = 0;
    while ( start <= end) {
        sum += start;
        start++;
    }

    console.log(sum);
}

sumOfRange('1', '5')


/*4.	Largest Number
Write a function that takes three number arguments as an input and find the largest of them. Print the following text on the console:  'The largest number is {number}.'.
The input comes as three number arguments passed to your function.
*/

function largestNumber(...args) {
    console.log(`The largest number is ${Math.max(...args)}.`);
}

largestNumber(5, -3, 16)


/*5.	Circle Area
Write a function that takes a single argument as an input. 
Check the type of the input argument. If it is a number, assume it is the radius 
of a circle and calculate the circle area. Print the area rounded to two decimal places.
If the argument type is NOT a number, print the following text on the console: 
'We can not calculate the circle area, because we receive a {type of argument}.'
The input comes as a single argument passed to your function.
*/

function circleArea(num) {
    let result = '';
    typeof (num) === 'number' ? result = (Math.PI * num * num).toFixed(2)
        : result = `We can not calculate the circle area, because we receive a ${typeof (num)}.`
    console.log(result);
}

circleArea(5)


/*6.	Square of Stars
Write a function that prints a rectangle made of stars with variable size, 
depending on an input parameter. If there is no parameter specified, 
the rectangle should always be of size 5. Look at the examples to get an idea.
The input comes as a single number argument.
*/

function squareOfStars(num) {

    let printStar = (num) => {
        for (let i = 0; i < num; i++) {
            console.log('* '.repeat(num))
        }
    }

    num === undefined ? num = 5 :
        num === 1 ? console.log('*') :
            printStar(num);
}

squareOfStars(5)

/*7.	Day of Week
Write a function that prints a number between 1 and 7 when a day of the week is passed to it
 as a string and an error message if the string is not recognized.
The input comes as a single string argument.
*/

function dayOfWeek(day) {
    let days = {
        'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6, 'Sunday': 7,
    }
    console.log((days[day] || 'error'));
}

dayOfWeek('Monday');

/*8.	Aggregate Elements
Write a program that performs different operations on an array of elements. Implement the following operations:
•	Sum(ai) - calculates the sum all elements from the input array
•	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
•	Concat(ai) - concatenates the string representations of all elements from the array
The input comes as an array of number elements.
*/

function aggregateElement(arr) {
    console.log(arr.reduce((a, b) => a + b, 0));
    console.log(arr.reduce((a, b) => a + 1 / b, 0));
    console.log(arr.join(''));
}

aggregateElement([2, 4, 8, 16])

/*9.	*Words Uppercase
Write a program that extracts all words from a passed in string and converts them to upper case. The extracted words in upper case must be printed on a single line separated by ", ".
The input comes as a single string argument - the text to extract and convert words from.
The output should be a single line containing the converted string.
*/

function upperCase(arr) {
   console.log(arr.toUpperCase().split(/\W/g).filter(el => el !== '').join(', '));
}
upperCase('Hi, how are you?')