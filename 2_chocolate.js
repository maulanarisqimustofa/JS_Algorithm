var bought = 30;
console.log("Input :" + bought);
var total = 0;
for (bought; bought >= 1; bought /= 5) {
    total += bought;
}
console.log("Output :" + Math.floor(total))