/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length;
    let left=0;
    let right = n-1;
    let max =0;
    while(left<right){
        let minHeight = Math.min(height[left], height[right]);
        let currentArea = minHeight * (right-left);
        max = Math.max(max, currentArea);
        if(height[left]<height[right]){
            left++;
        } else{
            right--;
        }
    }
    return max;
};