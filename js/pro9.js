function oddeven(num) {

    let pr9 = document.getElementById("pr9");
    if (num % 2 == 0) {
        pr9.innerHTML = "Number is even";
    } else {
        pr9.innerHTML = "Number is odd";
    }
}
oddeven(7);