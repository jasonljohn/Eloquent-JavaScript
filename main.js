function chessboard(n) {
    let i,j;
    let board = "";
        for (i=0;i<n;i++){
            for (j=0;j<n;j++){
                if ((i+j)%2 == 0){
                    //document.write(" ");
                    //console.log(" ");
                    board += " ";
                } else {
                    //document.write("#");
                    //console.log("#");
                    board += "#";
                }
            }
            //console.log("\n");
            //document.write("<br >");
            board += "\n";
        }
        console.log(board);
        //document.write(board);
    }
chessboard(8);