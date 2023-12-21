/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n = nums.length;
    let i=0;
    while(i<n-1){
        let j=i+1;
        while(j<n){
            if(nums[i]+nums[j]==target){
                return [i,j];
            }
            j++;
        }
        i++;
    }
};