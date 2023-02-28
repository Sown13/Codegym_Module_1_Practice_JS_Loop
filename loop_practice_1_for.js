function totalCal() {
    let num = prompt("nhập 1 số vào đây");
    let total = 0;
    let i;
    for (i = 1; i <= num; i++) {
        total = total + i
    }
    alert(total);
}
document.querySelector("#total").addEventListener("click",totalCal)