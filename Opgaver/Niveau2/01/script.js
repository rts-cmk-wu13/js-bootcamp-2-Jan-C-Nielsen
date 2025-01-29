let buttons = document.querySelector("#buttons")
buttons.addEventListener("click", lit);
console.log(buttons);

function lit(e) {
    console.log(buttons.childNodes);
    buttons.childNodes.forEach(function(s) {if(s.nodeName ==="BUTTON") s.setAttribute("style", "background-color:blue"); });
    e.target.setAttribute("style", "background-color:black");
}
