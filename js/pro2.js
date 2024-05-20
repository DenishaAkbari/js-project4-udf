function area() {

    let pi = 3.14;
    let r = 5;
    let areaOfCircle = pi * r * r;
    let pr2 = document.getElementById("pr2");

    // console.log(" Area of Circle =>", areaOfCircle);
    pr2.innerHTML = " Area of Circle => " + areaOfCircle;

}
area();