const mainPage = document.querySelector("main");

TweenMax.from(mainPage, 2, {
    backgroundColor:"black", 
    opacity: 1, 
    ease:Power3.easeOut
})