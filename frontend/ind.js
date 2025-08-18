let x = document.getElementById("mdrp");
let m = document.getElementById("menudrop");
let cr = document.getElementById("cross");
let dr = document.getElementById("dropdown");
let scr = document.getElementById("scroll")
try{

x.addEventListener('click',function(){

    
    dr.classList.add("d-none");
    scr.classList.remove("d-none");
});

cr.addEventListener('click', async function(){
     console.log("hello");
     
     await scr.classList.add("ani");
     scr.classList.add("d-none");
     dr.classList.remove("d-none");
    
 });

scr.addEventListener("mouseup",function(){
    m.scroll(0,10);
});



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

}
 catch(err){
    console.log("hello" +err + err.stack);
 }
