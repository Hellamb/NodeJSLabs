/**
 * Task: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let lastNum;
    let skippedArr = [];
    const newArr = [];

    nums.forEach(num => {
        if (num === lastNum) {
            skippedArr.push('_');
        } else {
            newArr.push(num);
            lastNum = num;
        }
    })

    nums.splice(0, nums.length, ...newArr.concat(skippedArr))
    return nums.length - skippedArr.length;
};

let nums = [1,1,1,2,3,4,5,5,6];
const num = removeDuplicates(nums)
console.log(num)
console.log(nums)