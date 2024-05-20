function swipe(x, y) {
    let pr10 = document.getElementById("pr10");
    let pr11 = document.getElementById("pr11");

    let temp = x;
    x = y;
    y = temp;

    pr10.innerHTML = "Before Swapping: x = " + 4 + ", y = " + 5;
    pr11.innerHTML = "After swiping  x = " + x + ", y = " + y;
}
swipe(4, 5);