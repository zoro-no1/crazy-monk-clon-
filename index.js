let humburger = document.getElementById("humburger");
let clo = document.querySelector("#close");
let menu = document.querySelector("#menu");

function open(){
menu.style.display="block";
}
function close(){
    menu.style.display="none";
}
humburger.addEventListener("click",open);
clo.addEventListener("click", close);