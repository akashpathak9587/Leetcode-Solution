/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length;
    if(n==0) return
    let index = 0;
    let i = 1;
    while(i<n){
        if(nums[i] != nums[index]){
            index++;
            nums[index] = nums[i];
        }
        i++;
    }
    return index+1;
};