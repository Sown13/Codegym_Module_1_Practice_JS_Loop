let i,j,e, table;
table = "<table>";
i=2;
j=1;

while (j<=9) {
    table += "<tr>";
    // console.log(j)
    while (i <= 9) {
        e=i*j;
        table = table + "<td>" + i + "*" + j + "=" + e + "</td>";
        i++;
        // console.log(i)
    }
    // cuối vòng lặp i này, i có giá trị = 9 nên cần khai báo lại giá trị mới của i = 2
    table += "</tr>";
    i=2
    j++;
    // console.log(i);
    // console.log(j);
}
table += "</table>";
document.write(table);
// let table100, i, j;
// table100 = "<table>"
// i = 1;
// j = 2;
// e = i*j
// while (j<=9){
//     table100 += "<tr>";
//     while (i<=9){
//         table100 = table100 + "<td>" + i +"*" + j + "=" + e + "</td>";i++;
//     }
//     table100 += "</tr>";
//     i=1;
//     j++;
// }
// table100 += "<table>";
// document.write(table100)