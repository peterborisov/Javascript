/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
Input: s = "()"
Output: true
*/

let isValid = (s) => {
    let stack = [],
        map = {
            '(': ')',
            '[': ']',
            '{': '}'
        };
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};

console.log(isValid('{[]}'))