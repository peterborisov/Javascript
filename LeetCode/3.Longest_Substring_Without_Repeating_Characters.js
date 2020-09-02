/*
Given a string, find the length of the longest substring without repeating characters.
*/

/*
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
*/

function lengthOfLongestSubstring(s) {
    if(s.length <=1){
        return s.length;
    }
    let p = 0;
    let q = 1;
    let result = 1;
    while (q < s.length) {
        let sub = s.slice(p, q);
        let i = sub.indexOf(s[q]);
        if (i !== -1) {
            p = p + i + 1;
        }
        q++;
        result = q - p > result ? q - p : result;
    }
    return result;
}

console.log(lengthOfLongestSubstring(''))
