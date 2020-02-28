function solution(a) {
    return function (b) {
        return a + b;
    }
}

//Short solution, but judge dosn't accept it.
// const solution  = outer => inner => outer + inner;
let a = solution(5);
console.log(a(3));
