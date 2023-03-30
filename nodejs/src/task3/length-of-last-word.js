/**
 * Task: https://leetcode.com/problems/length-of-last-word/
 *
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    const arr = s.trim().split(' ');
    const lastWord = arr[arr.length - 1]
    return lastWord.length;
};

const string = 'Hello World, Hello NodeJS';
console.log(lengthOfLastWord(string))