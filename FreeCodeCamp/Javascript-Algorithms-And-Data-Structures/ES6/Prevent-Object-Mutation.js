"use strict";
const MATH_CONSTANTS = {
    PI: 3.14
};

Object.freeze(MATH_CONSTANTS);

function freezeObj() {
    // change code below this line

    // change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
