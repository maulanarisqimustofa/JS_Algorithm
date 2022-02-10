const input = "1 6 1 4 3 8 9 5 2"
    .split("").map((x) => {
        const trying = parseInt(x, 10);
        return isNaN(trying) ? -1 : trying;
    });
const inputMax = input.indexOf(Math.max(...input));
const nums = input.map((x) => Math.min(...input.filter((xy) => xy > x).concat([inputMax])));

function removing(arr) {
    var smallest = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i]) {
            smallest = i + 1;
            arr.splice(smallest, 1);
        }
    }
    return arr;
}
const afterremove = removing(nums);

let arrr = afterremove;
let x = arrr.length;

function replace(arrr, x) {
    let maxi = arrr[0];
    for (let i = 0; i < x; i++) {
        if (arrr[i] > maxi)
            maxi = arrr[i];
    }
    let mini = arrr[0];
    for (let i = 0; i < x; i++) {
        if (arrr[i] < mini)
            mini = arrr[i];
    }
    for (let i = 0; i < x; i++) {
        if (arrr[i] == maxi) {
            arrr[i] = "^";
            break;
        }
    }
    console.log("Output")

    function printing(arrr, x) {
        for (let i = 0; i < x - 1; i++) {
            console.log(arrr[i] + " ");
        }
        console.log(arrr[x - 1]);
    }
    printing(arrr, x);
}
replace(arrr, x);