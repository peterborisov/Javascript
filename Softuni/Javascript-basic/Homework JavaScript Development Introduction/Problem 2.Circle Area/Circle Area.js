
function calcCircleArea(r) {
    return Math.PI * (r * r);
}
document.getElementById("one").innerHTML = calcCircleArea(7);
document.getElementById("two").innerHTML = calcCircleArea(1.5);
document.getElementById("tree").innerHTML = calcCircleArea(20);