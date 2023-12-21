/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let n=nums.length;
    nums.sort((a,b) => a-b)
    let i=0;
    let result = [];
    while(i<n-2){
        if(i==0 || (i>0 && nums[i]!=nums[i-1])){
            let target = -nums[i];
            let left = i+1;
            let right = n-1;
            while(left<right){
                let sum = nums[left] + nums[right];
                if(target == sum){
                    result.push([nums[i], nums[left], nums[right]]);
                    while(left<right && nums[left]==nums[left+1]) left++;
                    while(left<right && nums[right]==nums[right-1]) right--;
                    left++;
                    right--;
                } else if(sum<target){
                    left++;
                } else{
                    right--;
                }
            }
        }
        i++;
    }
    return result;
};