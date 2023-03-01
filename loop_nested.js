let table100, i, j;
table100 = "<table>"
// for (i=1;i<=10;i++){
//     table100 += "<tr>";
//     for (j=1; j<=10;j++){
//         table100 = table100 + "<td>" + i*j + "</td>";
//     }
//     table100 += "<tr>";
// } table100 += "</table>";
//     document.write(table100);

i = j = 1;
while (i<=10){
    table100 += "<tr>";
    while (j<=10){
        table100 = table100 + "<td>" + i*j + "</td>";j++;
    }
    table100 += "</tr>";
    j=1;
    i++;
}
table100 += "<table>";
document.write(table100)