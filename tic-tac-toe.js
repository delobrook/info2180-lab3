window.onload=function(){
   
    var board= document.getElementById("board");
    var squares=board.children;
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
    }
    function ccmover(i){
        squares[i].classList.add("hover");
    }
    function ccmout(i){
        squares[i].classList.remove("hover");
    }
        
    
  
   
};
