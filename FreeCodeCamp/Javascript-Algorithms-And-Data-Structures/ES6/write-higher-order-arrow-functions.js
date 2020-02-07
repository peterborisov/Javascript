"use strict";
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  // change code below this line
  const squaredIntegers = arr
                 .filter((positive) => positive > 0 && positive % parseInt(positive) === 0)
                 . map((positive) => Math.pow(positive, 2))
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);