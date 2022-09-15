let N = parseInt(prompt("Enter N"));
let Sum = 0;
let n;
for (let i = 1; i <= N; i++) {
    n = parseInt(prompt("Nhập số n"));
    Sum += n;
}
document.write("Trung bình " + Sum / N + "<br>");
document.write("Tổng " + Sum);