/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jump = 0;
    let maxReach = 0;
    let currentReach = 0;
    for(let i = 0;i<nums.length-1;i++){
        maxReach = Math.max(maxReach, i+nums[i]);
        if (i===currentReach){
            currentReach = maxReach;
            jump++;
        }
    }
    return jump;
};