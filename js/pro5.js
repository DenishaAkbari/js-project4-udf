function sum(a, b ,c) {

    let pr5 = document.getElementById("pr5");
    let sarea;
    sarea = ((b * b) * (4 * a * c)) / (2 * a);
    // 25 * 96 / 8
    return sarea;
}
let sarea = sum(4, 5, 6);
pr5.innerHTML = sarea;