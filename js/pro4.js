function rectangle(l , h) {

    let pr4 = document.getElementById("pr4");
    let rarea;
    rarea = l * h ;
    return rarea;
}
let rarea = rectangle(5, 20);
pr4.innerHTML =  " Area of triangle  => " + rarea;