function triangle(l , h) {

    let pr3 = document.getElementById("pr3");
    let tarea;
    tarea = l * h / 2;
    return tarea;
}
let tarea = triangle(10, 20);
pr3.innerHTML =  " Area of triangle  => " + tarea;