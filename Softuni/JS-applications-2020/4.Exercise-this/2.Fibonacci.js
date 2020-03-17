function getFibonator() {
    let a = 0,
        b = 1;
    return function () {
        let tmpA = a;
        a = b;
        b = tmpA + b;
        return a;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3