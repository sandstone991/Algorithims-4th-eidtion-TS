import UnionFind from "./union-find";
export default class WeightedQuickUnion extends UnionFind {
    size: number[];
    constructor(N: number) {
        super(N);
        this.size = Array(N).fill(1);
    }
    public find(p: number): number {
        while (this.id[p] !== p) {
            //The root is the node that points to itself
            p = this.id[p];
        }
        return p;
    }
    public union(p: number, q: number): void {
        let rootP = this.find(p);
        let rootQ = this.find(q);
        if (rootP === rootQ) return;
        if (this.size[rootP] > this.size[rootQ]) {
            this.id[rootQ] = rootP;
            this.size[rootP] += this.size[rootQ];
        }
        else {
            this.id[rootP] = rootQ;
            this.size[rootQ] += this.size[rootP];
        }
        this.components--;
    }
}