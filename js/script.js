var x = 9;

for (i = 2; i <= x; i++) {
var flag =0;
    for (j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
            flag=1;
            break
        }
    }
    if (flag == 0) {
        console.log("prime no");
        console.log(i);
    }
}