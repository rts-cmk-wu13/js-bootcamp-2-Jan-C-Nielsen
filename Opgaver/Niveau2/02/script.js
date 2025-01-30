let addbuttons = document.querySelectorAll(".product__add");
let subbuttons = document.querySelectorAll(".product__sub");
let products = Array.from(document.querySelectorAll(".product"));
console.log(products);
products.forEach(function (x) {
    console.log(x);
    x.querySelector(".product__add").addEventListener("click", calc);
    x.querySelector(".product__sub").addEventListener("click", calc);
})

let numbers = [1, 1, 1];

function calc(e) {
    console.log(e.target.getAttribute("class"));
    let number = e.currentTarget.parentNode.parentNode.querySelector(".product__number");
    let parent = e.currentTarget.parentNode.parentNode.parentNode;
    let index = products.indexOf(parent);
    if (e.target.getAttribute("class") === "product__add")
        numbers[index]++;
    else
        numbers[index] = numbers[index] > 0 ? numbers[index] - 1 : 0;
    number.innerHTML = numbers[index];
}
