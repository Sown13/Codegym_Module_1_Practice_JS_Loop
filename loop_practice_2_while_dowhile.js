function totalCal() {
    let num = parseInt(prompt("nhập vào '0' để dừng lại"));
    let total = 0
    while (num !== -1) {
        num = parseInt(prompt("nhập vào '0' để dừng lại"));
        // console.log(num);
        total += num;
        console.log(num);
        alert(num);
        // console.log(total)
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

let value = null;
do {value = prompt("enter a number from 1->10");
} while (value <1 || value >10);
alert("bạn vừa nhập số" + value);

