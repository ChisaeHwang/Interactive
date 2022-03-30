const mainPage = document.querySelector("main");

TweenMax.from(mainPage, 3, {
    backgroundColor:"black", 
    opacity: 1, 
    ease:Power3.easeOut
})