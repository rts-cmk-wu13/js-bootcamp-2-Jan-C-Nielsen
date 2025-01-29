let addbutton = document.querySelector(".add");
let subbutton = document.querySelector(".sub");

addbutton.addEventListener("click", add);
subbutton.addEventListener("click", sub);

let price = 0;

function add() {
    console.log("add");
    price++;
    document.querySelector(".number").innerHTML = price;
}

function sub() {
    console.log("sub");
    price = price > 0 ? price-1 : 0;
    document.querySelector(".number").innerHTML = price;
}