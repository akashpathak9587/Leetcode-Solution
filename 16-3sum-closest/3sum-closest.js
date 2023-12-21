/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let closestSum = Number.MAX_SAFE_INTEGER;
    let n = nums.length;
    let i=0;
    while(i<n-2){
        let left = i+1;
        let right = n-1;
        while(left<right){
            let currentSum = nums[i]+nums[left]+nums[right];
            if (Math.abs(target-currentSum) < Math.abs(target-closestSum)){
                closestSum = currentSum;
            }
            if(currentSum<target){
                left++;
            } else if(currentSum>target){
                right--;
            }else{
                return currentSum;
            }
        }
        i++;
    }
    return closestSum;
};