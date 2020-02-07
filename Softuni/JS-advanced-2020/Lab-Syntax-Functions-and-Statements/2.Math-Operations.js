// Write a JS function that takes two numbers and a string as an input.
// The string may be one of the following: &#39;+&#39;, &#39;-&#39;, &#39;*&#39;, &#39;/&#39;, &#39;%&#39;, &#39;**&#39;.
// Print on the console the result of the mathematical operation between both numbers and the operator
// you receive as a string.
// The input comes as two numbers and a string argument passed to your function.
// The output should be printed on the console.

function mathOperations(args){

      switch(args[2]){
          case '+': return args[0] + args[1]; break;
          case '-': return args[0] - args[1]; break;
          case '/': return args[0] / args[1]; break;
          case '*': return args[0] * args[1]; break;
          case '%': return args[0] % args[1]; break;
          case '**': return args[0] ** args[1]; break; 
      }
}

let input = [5, 6, '-'];

console.log(mathOperations(input));