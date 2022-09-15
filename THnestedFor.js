let sout = ""
sout += "<table border='1'>"
    for (let i =1;i <=10; i++){
        sout += "<tr>"
            for (let j =1; j<=10;j++){sout += "<td>" + i*j + "</td>"}
        sout += "</tr>"
}
    sout += "</table>"
document.write(sout)