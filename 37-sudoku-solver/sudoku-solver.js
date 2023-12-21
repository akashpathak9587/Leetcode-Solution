/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    function isValid(row, col, val){
        for(let i=0;i<9;i++){
            if(board[row][i]==val || board[i][col]==val || board[3*Math.floor(row/3)+Math.floor(i/3)][3*Math.floor(col/3)+(i%3)]==val){
                return false;
            }
        }
        return true;
    }

    function solve(){
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                if(board[i][j]=="."){
                    for(let k="1";k<="9";k++){
                        if(isValid(i,j,k)){
                            board[i][j] = k.toString();
                            if(solve()){
                                return true;
                            } else{
                                board[i][j] = ".";
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    solve();
};