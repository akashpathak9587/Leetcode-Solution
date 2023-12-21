/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = new Array();
    let start = 0;
    let end = nums.length-1;
    let firstIndex=-1;
    let lastIndex=-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid]==target){
            temp = mid;
            while(nums[temp++]==target){
                lastIndex = temp-1;
            }
            temp=mid;
            while(nums[temp--]==target){
                firstIndex = temp+1;
            }
            result.push(firstIndex, lastIndex);
            return result;
        }
        if(nums[mid]>target){
            end = mid-1;
        } else{
            start = mid+1;
        }
    }
    if(firstIndex==-1 && lastIndex==-1){
        result.push(firstIndex, lastIndex);
        return result;
    }
};