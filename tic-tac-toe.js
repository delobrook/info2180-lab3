window.onload=function(){
   
    var board= document.getElementById("board");
    var squares=board.children;
    var gamestatus=document.getElementById("status");
    var newgame=document.getElementsByClassName("btn");
    newgame[0].onclick=function(){reloadpage()};
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]

    for(let i=0;i<board.children.length;i++){
        squares[i].classList.add("square");
        squares[i].onclick=function(){xoro(i)} ;
        squares[i].onmouseover=function(){ccmover(i)};
        squares[i].onmouseout=function(){ccmout(i)};
    }
    function xoro(i){

        if(squares[i].firstChild==null){
            squares[i].textContent="X";
            squares[i].classList.add("X");
          
        }else if(squares[i].textContent=="X"){
            squares[i].textContent="O";
            squares[i].classList.remove("X");
            squares[i].classList.add("O");
        } else if(squares[i].firstChild.textContent=="O"){
            squares[i].textContent=null;
            squares[i].classList.remove("O");
           
        } 

        setTimeout(winnercheck, 2500);
        setTimeout(clickTimer,1000); 
        function clickTimer(){
            squares[i].onclick=null;
        }
      
        
    }
    function ccmover(i){
        squares[i].classList.add("hover");
    }
    function ccmout(i){
        squares[i].classList.remove("hover");
    }

    function winnercheck(){
        
        for (let i=0 ;i<8;i++){
            let xcount=0;
            let ocount=0;
            for(let j=0;j<3;j++){
                if (squares[WINNING_COMBINATIONS[i][j]].classList.contains("X")){
                    xcount+=1;
                }else if (squares[WINNING_COMBINATIONS[i][j]].classList.contains("O")){
                    ocount+=1;
                }
                if(xcount==3){
                    winner("X");
                }else if(ocount==3){
                    winner("O");
                }
            }
        }
        
    
    }

    function winner(t){
        gamestatus.classList.add("you-won");
        if(t=="X"){
            gamestatus.textContent="Congratulations! X is the Winner!";
        } else if (t=="O"){
            gamestatus.textContent="Congratulations! O is the Winner!";

        }
    }
        
    function reloadpage(){
        location.reload();
    }
   
   
};
