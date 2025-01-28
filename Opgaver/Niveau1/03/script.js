function hideIt(cssSelector){
    let selector = document.querySelector(cssSelector);
    selector.setAttribute("style", "display:none");
}

hideIt("body h1");
