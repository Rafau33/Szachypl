var board;
var tura;
var locked;
function reset(){
    //reset the 2D array, which will be the "board" for our logic
    tura = "w";
    board = new Array(8);
    for(var x = 0; x<8;x++){
        board[x] = new Array(8);
        for(var y = 0; y<8;y++){
            var w = (x*10)+y
            if(w == 00 || w == 70){
                board[x][y] = 4;
            }
            if(w == 10 || w == 60){
                board[x][y] = 6;
            }
            if(w == 20 || w == 50){
                board[x][y] = 8;
            }
            if(w == 30){
                board[x][y] = 10;
            }
            if(w == 40){
                board[x][y] = 12;
            }
            if(y == 1){
                board[x][y] = 2;
            }
            if(y == 6){
                board[x][y] = 1;
            }
            if(w == 07 || w == 77){
                board[x][y] = 3;
            }
            if(w == 17 || w == 67){
                board[x][y] = 5;
            }
            if(w == 27 || w == 57){
                board[x][y] = 7;
            }
            if(w == 37){
                board[x][y] = 9;
            }
            if(w == 47){
                board[x][y] = 11;
            }
        }
    }

    
    //debug
}

//make our array influence the board
function logicToBoard(){
    console.log(board);
    for(var x = 0; x < 8; x++){
        for(var y = 0; y < 8; y++){
            // 0 - nothing
            // 1 - white pawn
            // 2 - black pawn
            // 3 - white rook
            // 4 - black rook
            // 5 - white knight
            // 6 - black knight
            // 7 - white bishop
            // 8 - black bishop
            // 9 - white queen
            //10 - black queen
            //11 - white king
            //12 - black king
            if (board[x][y] == 0){
                document.getElementById('cell_'+x+"_"+y).innerHTML = "";
            }
            else if (board[x][y] == 1){
                document.getElementById('cell_'+x+"_"+y).innerHTML = "♙";
            }
            else if (board[x][y] == 2){
                document.getElementById('cell_'+x+"_"+y).innerHTML = "♟";
            }
            else if (board[x][y] == 3){
                document.getElementById('cell_'+x+"_"+y).innerHTML = "♖";
            }
            else if (board[x][y] == 4){
                document.getElementById('cell_'+x+"_"+y).innerHTML = "♜";
            }
            else if (board[x][y] == 5){
                document.getElementById('cell_'+x+"_"+y).innerHTML = "♘";
            }
            else if (board[x][y] == 6){
                document.getElementById('cell_'+x+"_"+y).innerHTML = "♞";
            }
            else if (board[x][y] == 7){
                document.getElementById('cell_'+x+"_"+y).innerHTML = "♗";
            }
            else if (board[x][y] == 8){
                document.getElementById('cell_'+x+"_"+y).innerHTML = "♝";
            }
            else if (board[x][y] == 9){
                document.getElementById('cell_'+x+"_"+y).innerHTML = "♕";
            }
            else if (board[x][y] == 10){
                document.getElementById('cell_'+x+"_"+y).innerHTML = "♛";
            }
            else if (board[x][y] == 11){
                document.getElementById('cell_'+x+"_"+y).innerHTML = "♔";
            }
            else if (board[x][y] == 12){
                document.getElementById('cell_'+x+"_"+y).innerHTML = "♚";
            }
        }
    }
}
function clicked(a,b){
    if(!locked){
        //alert(a+","+b);
        if(tura == "w"){
            if (board[a][b]%2 == 1){
                alert('biały');
                locked = true;
                var figure = board[a][b];
                var num = [a,b];
            }
            else if (board[a][b]%2 == 0 && board[a][b] != 0){
                alert('afroamerykański - a tura białych');
            }
            else if (board[a][b] == 0){
                alert('puste pole')
            }

            }else if(tura == "b"){
            if (board[a][b]%2 == 1){
                alert('biały - a tura czarnych');

            }
            else if (board[a][b]%2 == 0 && board[a][b] != 0){
                alert('afroamerykański');
                locked = true;
                var figure = board[a][b];
                var num = [a,b];
            }
            else if (board[a][b] == 0){
                alert('puste pole');
            }

        }
        
        
    }
    else{
            if (tura == "w"){
                if(board[num[0]][num[1]] == 1){
                    alert('pion');
                    if ((board[a][b]) == 0){
                        if((num[1]-1) == b){
                            board[a][(num[1])] = 0;
                            board[a][b] = 1; //white pawn
                            logicToBoard();
                        } else if ((num[1] == 6) && ((num[1]-2) == b)){
                            if (board[a][b] == 0){
                                board[a][(num[1])] = 0;
                                board[a][b] = 1; //white pawn
                                logicToBoard();
                            }
                        }
                    }

                }
                tura = "b";
                locked = false;
                alert('w2b');
            }
            else if (tura == "b"){
                tura = "w";
                locked = false;
                alert('b2w');
            }
            
        }
    }



for(var x=0; x<8; x++){
    document.getElementsByTagName('table').item(0).innerHTML += '<tr></tr>';
    for(var y=0; y<8; y++){ //
        document.getElementsByTagName('tr').item(x).innerHTML += "<td id='dlaczegotd'><div onclick='clicked("+y+","+x+")' class='cell' id='cell_"+y+"_"+x+"'></div></td>";
    }
}

reset();
logicToBoard();

