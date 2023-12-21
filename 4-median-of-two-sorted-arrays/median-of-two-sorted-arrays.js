/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {         
    nums1 = nums1.concat(nums2);
    nums1.sort((a,b) => a - b);
    let rem = nums1.length%2;
    let i = Math.floor(nums1.length/2);
    if(rem==0){
        return (nums1[i]+nums1[i-1])/2;
    } else{
        return (nums1[i]);
    }
};