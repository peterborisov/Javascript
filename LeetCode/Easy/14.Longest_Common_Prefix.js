/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Input: ["flower","flow","flight"]
Output: "fl"
*/

let longestCommonPrefix = function (strs) {
    let result = '';
    if (strs === null || strs.length === 0) return result;

    // loop the first string. 
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        // loop other strings in the array
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) return result;
        }
        result += char;
    }

    return result;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]))