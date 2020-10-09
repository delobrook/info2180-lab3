window.onload=function(){
   
    var board= document.getElementById("board");
    var squares=board.children;
    for(let i=0;i<board.children.length;i++){
        squares[i].classList.add("square");
        squares[i].append(document.createElement("div"));
        squares[i].onclick=function(){xoro(i)} ;
        squares[i].onmouseover=function(){ccmover(i)};
        squares[i].onmouseout=function(){ccmout(i)};
    }
    function xoro(i){
        if(squares[i].firstChild.firstChild==null){
            squares[i].firstChild.textContent="X";
            squares[i].firstChild.classList.add("X");
        }else if(squares[i].firstChild.textContent=="X"){
            squares[i].firstChild.textContent="O";
            squares[i].firstChild.classList.remove("X");
            squares[i].firstChild.classList.add("O");
        } else if(squares[i].firstChild.textContent=="O"){
            squares[i].firstChild.textContent=null;
            squares[i].firstChild.classList.remove("O");
        
        } 
    }
    function ccmover(i){
        squares[i].classList.add("hover");
    }
    function ccmout(i){
        squares[i].classList.remove("hover");
    }
        
    
  
   
};
