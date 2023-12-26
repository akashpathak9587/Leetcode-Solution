class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        Set<List<Integer>> result = new HashSet<>();
        for(int i=0;i<=nums.length-3;i++){
            int left = i+1;
            int right = nums.length-1;
            while(left<right){
                if(nums[i]+nums[left]+nums[right]==0){
                    List<Integer> currResult = new ArrayList<>();
                    currResult.add(nums[i]);
                    currResult.add(nums[left]);
                    currResult.add(nums[right]);
                    result.add(currResult);
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++;
                    right--;
                }
                else if((nums[i]+nums[left]+nums[right])<0){
                    left++;
                } else{
                    right--;
                }
            }
        }
        return new ArrayList<>(result);
    }
}