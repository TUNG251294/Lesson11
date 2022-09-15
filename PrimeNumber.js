let Input = parseInt(prompt("Nhập số lượng số nguyên tố"));
let count = 1;
let flag;
let Num = 2;
while (count <= Input) {
    flag = true;
    for (let i = 2; i < Num; i++) {
        if (Num % i === 0) {
            flag = false;
            break;
        }
    }
    if (flag === true) {
        count++
        document.write(" " + Num)
    }
    Num++;
}


/*while (count <= Input){
    for (i=2;i<N;i++){
        if(N%i == 0){
            break;}
        else{count++,
        document.write(N + "is prime number" + "<br>"),
        N++
        break;
        }


    }

}*/