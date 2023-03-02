function count1To99() {
    let i;
    for (i = 1; i <= 100 ; i++) {
        if(i===99){document.write(i+"<br>"); alert("Finish!!!")}
       else {document.write(i + "<br>");}
    }
}

function userRoomTemp(){
    let temper = prompt("Please input your room current temperature");
    if (temper >100){
        alert("Please cool down your room!")
    } else if (temper <20){
        alert("Please rise up the temperature!")
    } else {alert("The air temperature is Ok");
    }
}

function fibonacci(fiboOrder) {
        if (fiboOrder <= 1) return 1;
        return (fibonacci(fiboOrder - 1) + fibonacci(fiboOrder - 2));
        // Không cần 2 dấu đóng mở ngoặc tổng () ở return thứ 2
    }

    document.write(fibonacci(5))

function writeFibo(){
    let i;
    let a=prompt("nhập vào số bị chia");
    for (i=1;i <=1000;i++){
        if( fibonacci(i) %a === 0){
            document.write(fibonacci(i));break;
        }
    }
}
// function firstDiv5Fibonacci() {
//     let i, a;
//     i = 1
//     a = fibonacci(i);
//     while (){
//         if (a %5 === 0) {
//             document.write(a)
//         } else i++
//     }
// }
function isPerfectSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
}
function isFibonacci(numberToCheck)
{ return isPerfectSquare(5*numberToCheck*numberToCheck + 4) ||
    isPerfectSquare(5*numberToCheck*numberToCheck - 4);
}

// function div5Fibo() {}
//  let a;
//  if (isFibonacci(a)){
//      if (a%5 === 0){
//      alert(a)}
//  }
//

function totalFibo(){
    let i,a,total;
    i = 0;
    total = 0;
    while(i < 20){
        total += fibonacci(i); i++
    } document.write(total);
}