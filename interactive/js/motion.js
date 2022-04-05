var wrap;
var x = 0, y = 0;
var nx = 0, ny = 0;

window.onload = function () {
    imgMove = document.querySelector(".contentWrap");

    window.addEventListener("mousemove", function (e) {

        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerHeight / 2);
        //마우스 위치값이 화면의 정가운데가 됨
    });
    move();
}

function move() {
    nx += (x - nx) * .05;
    ny += (y - ny) * .05;
    //가속도 설정. 뒤의 값을 변경하면 가속도 값 변경

    imgMove.style.transform = "translate3d(-50%, -50%, 0) rotateX(" + (ny / 10) + "deg) rotateY(" + (-nx / 10) + "deg)";
    //마우스 위치에 따른 위치 이동

    window.requestAnimationFrame(move);
    //반복 실행
}

