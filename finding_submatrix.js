var A = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
var B = [
    [11, 12],
    [15, 16],
];

var find_submat = function(mat, submat) {
    var i, j, k, l, found;
    for (i = 0; i <= (mat.length - submat.length); i++) {
        for (j = 0; j <= mat[i].length - submat[0].length; j++) {
            found = true;
            for (k = 0; k < submat.length; k++) {
                for (l = 0; l < submat[k].length; l++) {
                    if (mat[i + k][j + l] != submat[k][l]) {
                        found = false;
                        break;
                    }
                }
            }
            if (found) return (i + "," + j);
        }
    }
}
console.log("INPUT");
var m = A.length;
var n = A[0].length;
console.log("Size Matrix :" + m + "," + n);
console.table(A);
var k = B.length;
var l = B[0].length;
console.log("Size SubMatrix :" + k + "," + l);
console.table(B);
console.log("OUTPUT");
if (find_submat(A, B))
    console.log(find_submat(A, B));
else
    console.log("No");