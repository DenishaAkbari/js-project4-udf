function sum( f ,c) {

    let pr7 = document.getElementById("pr7");
    let Fahrenheit;
    Fahrenheit = (c = (f-32)/1.8 );
    // c = (6 - 32) / 1.8
    return Fahrenheit;
}
let Fahrenheit = sum(6);
pr7.innerHTML = Fahrenheit;