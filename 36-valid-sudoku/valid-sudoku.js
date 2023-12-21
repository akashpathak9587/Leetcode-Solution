/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    function isValid(arr){
        const seen = new Set();
        for(let i=0;i<9;i++){
            if(arr[i]!=="." && seen.has(arr[i])){
                return false;
            }
            seen.add(arr[i]);
        }
        return true;
    }

    for(let i=0;i<9;i++){
        // check row
        if(!isValid(board[i])){
            return false;
        }
        const column = new Array();
        for(let j=0;j<9;j++){
            column.push(board[j][i]);
        }
        // check column
        if(!isValid(column)){
            return false;
        }
    }

    for(let i=0;i<9;i=i+3){
        for(let j=0;j<9;j=j+3){
            const subgrid= new Array();
            for(let k =i;k<i+3;k++){
                for(let l=j;l<j+3;l++){
                    subgrid.push(board[k][l])
                }
            }
            if(!isValid(subgrid)){
                return false;
            }
        }
    }
    return true;
};