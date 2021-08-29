const ball = document.getElementById("ball");
const block = document.getElementById("block");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (ball.classList != "jump") {
        ball.classList.add("jump")
    }
    setTimeout(function() {
        ball.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval (function() {
    let ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 40 && blockLeft > 0 && ballTop >= 160) {
        alert("Game over! Вы в тапках!")
    }

}, 10)