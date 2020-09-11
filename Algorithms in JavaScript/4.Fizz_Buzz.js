const fizzBuzz = number => {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) console.log("Fizz Buzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
    }
};

console.log(fizzBuzz(15))