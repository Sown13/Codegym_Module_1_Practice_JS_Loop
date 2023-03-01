function totalCal() {
    let num = parseInt(prompt("nhập vào '0' để dừng lại"));
    let total = 0
    while (num !== 0) {
        num = parseInt(prompt("nhập vào '0' để dừng lại"));
        console.log(num);
        total += num;
        console.log(num);
        alert(num);
        console.log(total)
    }
    alert(total);
}
// let num = parseInt(prompt("Enter a number: "));
// let total = 0;
// while( num !== 0 ) {
//     num = parseInt(prompt("Enter a number: "));
//     alert(num);
//     //phần code tính tổng
//     total += num;
// }
// alert(total);
let i = 0;
while (i<=100){
    document.write("<hr style=width:" +i + "%>");
    i++;
}