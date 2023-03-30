/**
 * Task: https://leetcode.com/problems/two-sum/.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    for(let index1 = 0 ; index1 < nums.length ; index1++ ){
        for( let index2 = index1 + 1 ; index2 < nums.length ; index2++ ) {
            if(nums[index1] + nums[index2] === target) {
                return [index1, index2];
            }
        }
    }
};

const nums = [2,7,11,15]
const target = 18;

console.log(twoSum(nums, target))
