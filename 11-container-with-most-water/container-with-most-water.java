class Solution {
    public int maxArea(int[] height) {
        int left = 0;
        int right = height.length-1;
        int result=0;
        while(left<right){
            if(height[left]<height[right]){
                int currResult = height[left]*(right-left);
                if(currResult>result) result = currResult;
                left++;
            } else{
                int currResult = height[right]*(right-left);
                if(currResult>result) result = currResult;
                right--;   
            }
        }
        return result;
    }
}