let chessboard = ""
size = 56;
bigSize = size / 2; 
for(let j = 0; j<bigSize; j++){
    for (let i = 0; i<size; i++) {
        if (i % 2 == 0){
            chessboard += "#";
            
        }
        if (i % 2 == 1){
            chessboard += " ";
            
        }
    }
    chessboard = chessboard + "\n" 
    for (let i = 0; i<size; i++) {
        if (i % 2 == 1){
            chessboard += "#";
            
        }
        if (i % 2 == 0){
            chessboard += " ";
            
        }
    }
    chessboard = chessboard + "\n"
}
console.log(chessboard);