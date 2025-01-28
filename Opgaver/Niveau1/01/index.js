let button = document.querySelector("#my-button");
let color = true;
console.log(button);
button.addEventListener("click", function () {
    if (color)
        button.setAttribute("style", "background-color:#eee");
    else
        button.setAttribute("style", "background-color:#7f7");
    color=!color;
});