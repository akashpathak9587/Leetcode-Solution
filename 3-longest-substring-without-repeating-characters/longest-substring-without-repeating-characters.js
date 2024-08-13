/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let string = [];
        for (let j = i; j < s.length; j++) {
            if (string.includes(s[j])) {
                break;
            }
            string.push(s[j]);
        }
        if(string.length > maxLength) 
            maxLength = string.length;
    }

    return maxLength;
};