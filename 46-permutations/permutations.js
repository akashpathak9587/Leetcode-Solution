/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    const solve = (current, remaining)=>{
        if(remaining.length===0){
            result.push([...current]);
        }else{
            for(let i=0;i<remaining.length;i++){
                nexRemaining = remaining.slice(0, i).concat(remaining.slice(i+1));
                solve([...current, remaining[i]], nexRemaining );
            }
        }
    }
    solve([], nums);
    return result;
};