let sout = ""
sout += "<table border='1'>"
for (let i = 1; i < 10; i++) {
    sout += "<tr>"
    for (let j = 2; j < 10; j++) {
        sout += "<td>" + j + " x " + i + " = " + (i * j) + "</td>"
    }
    sout += "</tr>";
}
sout += "</table>"
document.write(sout)