/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let n = nums.length;
    let i=0;
    let result = new Array();
    while(i<n-3){
        if(i==0 || (i>0 && nums[i]!=nums[i-1])){
            let j = i+1;
            while(j<n-2){
                if(j==i+1 || (j>i+1 && nums[j]!=nums[j-1])){
                    let left = j+1;
                    let right = n-1;
                    while(left < right){
                        let sum = nums[i]+nums[j]+nums[left]+nums[right];
                        if(sum == target){
                            result.push([nums[i], nums[j], nums[left], nums[right]]);
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
                j++;
            }
        }
        i++;
    }
    return result;
};