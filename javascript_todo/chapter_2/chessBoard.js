const chessBoard = (size = 8, string = '#') => {
    let board = "";
    
    for (let row = 1; row <= size;row++) {
        
        for (let column = 1; column <=size;column++) {
           
            (
                (row + column) % 2 === 0 ?
                board += " " :
                board += string
            )
        }
        
        board += "\n";
    }
    
    console.log(board);
}

chessBoard();
