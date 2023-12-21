/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums = nums.filter(num=>num>0);
    nums.sort((a,b)=>a-b);
    let missing = 1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==missing){
            missing++;
        } else if(nums[i]>missing){
            return missing;
        }
    }
    return missing;
};