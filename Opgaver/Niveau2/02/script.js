let addbuttons = document.querySelectorAll(".add");
let subbuttons = document.querySelectorAll(".sub");
let products = Array.from(document.querySelectorAll(".product"));
console.log(products);
products.forEach(function(x) {
    console.log(x);
    
    x.querySelector(".add").addEventListener("click", add);
    x.querySelector(".sub").addEventListener("click", sub);  
})

let numbers = [1,1,1];

function add(e) {
    let number = e.currentTarget.parentNode.parentNode.querySelector(".number");
    console.log(number);
    let parent = e.currentTarget.parentNode.parentNode.parentNode;
    let index = products.indexOf(parent);
    console.log( numbers[products.indexOf(parent)]);
    numbers[index]++;
    console.log(numbers);
    number.innerHTML = numbers[index] ;
}

function sub(e) {
    let number = e.currentTarget.parentNode.parentNode.querySelector(".number");
    console.log(number);
    let parent = e.currentTarget.parentNode.parentNode.parentNode;
    let index = products.indexOf(parent);
    console.log( numbers[products.indexOf(parent)]);
    numbers[index] = numbers[index] > 0 ? numbers[index]-1 : 0;
    console.log(numbers);
    number.innerHTML = numbers[index] ;
}