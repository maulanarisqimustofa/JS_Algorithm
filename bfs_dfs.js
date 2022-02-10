class graph {
    constructor(X) {
        this.X = X;
        this.nums = new Array(X);

        for (let i = 0; i < this.nums.length; i++)
            this.nums[i] = [];
    }
    edge(x, y) {
        this.nums[x].push(y);
    }
    bfs(z) {
        let looked = [];
        let queue = [];
        looked[z] = true;
        queue.push(z);
        while (queue.length != 0) {
            z = queue.shift();
            console.log(z + " ");
            for (let node = 0; node < this.nums[z].length; node++) {
                if (!looked[this.nums[z][node]]) {
                    looked[z] = true;
                    queue.push(this.nums[z][node]);
                }
            }
        }
    }
    dfs(z) {
        let looked = [];
        for (let i = 0; i < this.X; i++)
            looked.push(false);
        let stack = [];
        stack.push(z);
        while (stack.length != 0) {
            z = stack.pop();
            if (looked[z] == false) {
                console.log(z + " ");
                looked[z] = true;
            }
            for (let node = 0; node < this.nums[z].length; node++) {
                if (!looked[this.nums[z][node]])
                    stack.push(this.nums[z][node])
            }
        }
    }
}
let a = new graph(5);
a.edge(0, 1);
a.edge(0, 2);
a.edge(0, 3);
a.edge(1, 4);

console.log("BFS");
a.bfs(0);
console.log("DFS");
a.dfs(0);