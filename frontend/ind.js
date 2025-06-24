


function drop(){
    let l = document.getElementById("id");
    l.classList.remove("drop2")
     l.classList.add("drop");
     
     
    
}
function drop2(){
    let l = document.getElementById("id");
    l.classList.remove("drop")
     l.classList.add("drop2");
     
     
    
}


let a = document.getElementById("idp");
 a.addEventListener('mouseover', drop);
 a.addEventListener("mouseout", drop2);