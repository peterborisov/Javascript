/*
Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Input: haystack = "hello", needle = "ll"
Output: 2
*/

let strStr = (haystack, needle) => {
    return haystack.indexOf(needle);
};

console.log(strStr("hello", "ll"))
