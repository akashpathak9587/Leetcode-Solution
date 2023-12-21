/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];
    candidates.sort((a,b)=>a-b);
    function solve(start, current, target){
        if(target==0){
            result.push([...current]);
            return;
        }
        for(let i=start;i<candidates.length;i++){
            if(i>start && candidates[i] == candidates[i-1]) continue;
            if(candidates[i]>target) break;
            current.push(candidates[i]);
            solve(i+1, current, target-candidates[i]);
            current.pop();
        }
    }

    solve(0, [], target);
    return result;
};