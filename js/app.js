const mainPage = document.querySelector("main");

TweenMax.to(mainPage, 0, {
    backgroundColor:"black", 
    opacity: 1, 
    ease:Power3.easeOut
})

TweenMax.to(mainPage, 3, {
    backgroundColor:"black", 
    opacity: 0, 
    ease:Power3.easeOut
})