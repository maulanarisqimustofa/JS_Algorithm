var input = 16;
console.log("INPUT :" + input);
console.log("OUTPUT :");
var output = input;
printing(input, output);

function printing(first, last) {
    if (first <= last) {
        if (first > 0) {
            console.log(first + " ");
            printing(first - 5, last);
        }
        console.log(first + " ");
        printing(first + 5);
    }
}