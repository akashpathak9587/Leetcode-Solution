/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

//  used recursive approach to dynamically add and removing element
var combinationSum = function(candidates, target) {
    candidates.sort((a,b)=>a-b);
    let result = [];

    function solve(start, current, target){
        if(target == 0){
            result.push([...current]);
            return;
        }

        for(let i=start;i<candidates.length;i++){
            if(candidates[i]>target) break;
            current.push(candidates[i]);
            solve(i, current, target-candidates[i])
            current.pop();
        }

    }

    solve(0, [], target);
    return result;

};