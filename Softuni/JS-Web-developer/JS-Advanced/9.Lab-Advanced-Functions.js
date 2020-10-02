//@ts-check

/*1. Add
Write a program that keeps a number inside its context and returns new function that adds a given number to the
previous one.
*/

let add = (a) => {
    return (b) => {
        return a + b;
    }
}

let add5 = add(5);
console.log(add5(2));
console.log(add5(3));

/*
2. Currency Format
Write a higher-order function that fixes some of the parameters of another function. Your program will receive a
function that takes 4 parameters and returns a formatted string (a monetary value with currency symbol).
Your task is to return another function that only takes one parameter and returns the same formatted string.
*/

function reduceFuncParams(currencyFormatter) {
    let dollarFormatter = value => currencyFormatter(',', '$', true, value);
    return dollarFormatter;
}

/*
3. Filter Employees
Write a program that filters the employees of your company. You should print the result in a specific format. You
will receive 2 parameters (data, criteria). You should parse the input, find all employees that fullfil the citeria
and print them.
*/

function filterEmployee(...args) {
    let json = JSON.parse(args[0]);
    let filterCriteria = args[1].split('-');
    let counter = 0;
    for (let el of json) {
        if (el.hasOwnProperty(filterCriteria[0]) && (Object.values(el).indexOf(filterCriteria[1]) > -1)) {
            console.log(`${counter}. ${el.first_name} ${el.last_name} - ${el.email}`);
            counter++;
        }
    }
}

/*
4. Command Processor
Write a program that keeps a string inside its context and can execute different commands that modify or print the
string on the console.
append(string) - append the given string at the end of the internal string
removeStart(n) - remove the first n characters from the string, n is an integer
removeEnd(n) - remove the last n characters from the string, n is an integer
print - print the stored string on the console
*/
