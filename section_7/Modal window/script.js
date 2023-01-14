'use strict';

const model = document.querySelectorAll(".show-modal");
const close = document.querySelector(".close-modal");
const hide = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
// console.log(model);

let remove = function(){
    //hide.style.display="block";
    hide.classList.remove("hidden");
    overlay.classList.remove("hidden");
    }
let add= function(){
    hide.classList.add("hidden");
    overlay.classList.add("hidden");
}    
for(let i=0; i<model.length;i++){
    model[i].addEventListener("click",remove)
}

close.addEventListener("click",add )

// window.addEventListener("click",function(e){
//    //console.log(e.target);
//    if (document.getElementsByClassName("show-modal").contains(e.target)){
//     // Clicked in box
//     console.log("Clicked Inside");
//   } else{
//     // Clicked outside the box
//     console.log("Clicked outside");
//   }
// })

document.addEventListener("keydown",function(e){
    console.log(hide.classList);
    if(e.key==="Escape" && !hide.classList.contains("hidden")){
        add() 
    }
})

document.addEventListener("click",function(e){
    console.log(e);
})