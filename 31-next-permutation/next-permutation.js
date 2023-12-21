/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length-2;
    let ind1=-1;
    let ind2=-1;
    while(i>=0){
        if(nums[i]<nums[i+1]){
                ind1 = i;
                break;
        }
        i--;
    }
    if(ind1==-1){
        reverse(nums, 0);
    } else{
        let j = nums.length-1;
        while(j>=0){
            if(nums[j]>nums[ind1]){
                ind2=j;
                break;
            }
            j--;
        }
        swap(nums, ind1, ind2);
        reverse(nums, ind1+1);
    }

    function swap(nums, ind1, ind2){
        let temp = nums[ind1];
        nums[ind1] = nums[ind2];
        nums[ind2] = temp;
    }
    function reverse(nums, ind1){
        let i=ind1;
        let j = nums.length-1;
        while(i<j){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j]= temp;
            i++;
            j--;
        }
    }
};
