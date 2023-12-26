class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int arraySize = nums1.length + nums2.length;
        int[] newArray = new int[arraySize];
        System.arraycopy(nums1, 0, newArray, 0, nums1.length);
        System.arraycopy(nums2, 0, newArray, nums1.length, nums2.length);
        Arrays.sort(newArray);
        boolean odd = arraySize%2 != 0;
        double result;
        int mid = arraySize / 2;
        if(odd){
            result =  newArray[mid];
        } else{
            result = (newArray[mid-1] + newArray[mid])/2.0;
        }
        return result;
    }
}