let addbuttons = document.querySelectorAll(".product__add");
let subbuttons = document.querySelectorAll(".product__sub");
let products = Array.from(document.querySelectorAll(".product"));
console.log(products);
products.forEach(function(x) {
    console.log(x);
    
    x.querySelector(".product__add").addEventListener("click", add);
    x.querySelector(".product__sub").addEventListener("click", sub);  
})

let numbers = [1,1,1];

function add(e) {
    let number = e.currentTarget.parentNode.parentNode.querySelector(".product__number");
    let parent = e.currentTarget.parentNode.parentNode.parentNode;
    let index = products.indexOf(parent);
    numbers[index]++;
    number.innerHTML = numbers[index];
}

function sub(e) {
    let number = e.currentTarget.parentNode.parentNode.querySelector(".product__number");
    let parent = e.currentTarget.parentNode.parentNode.parentNode;
    let index = products.indexOf(parent);
    numbers[index] = numbers[index] > 0 ? numbers[index]-1 : 0;
    number.innerHTML = numbers[index];
}