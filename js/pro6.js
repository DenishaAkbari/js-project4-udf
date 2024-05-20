function sum(a, b ,c) {

    let pr6 = document.getElementById("pr6");
    let ans;
    ans = (a*a) + (2*a*b) + (b*b) ;
    //8*8 + 16*9 + 9*9
    // 64 * 144 + 81
    return ans;
}
let ans = sum(8, 9, 7);
pr6.innerHTML = ans;