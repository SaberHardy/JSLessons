var circle = document.getElementById('circle');
var buttonUP = document.getElementById('arrow-up');
var buttonDown = document.getElementById('arrow-down');

var rotateValue = circle.style.transform;
var rotateSum;

buttonUP.onclick = function () {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}


buttonDown.onclick = function () {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

