function sum(c) {

    let pr8 = document.getElementById("pr8");
    let Celsius;
    Celsius = (f= (c*1.8)+32 ) ;
    // c = (10 * 1.8) + 32
    return Celsius;
}
let Celsius = sum(10);
pr8.innerHTML = Celsius;