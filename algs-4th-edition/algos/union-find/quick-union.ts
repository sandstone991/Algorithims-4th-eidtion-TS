import UnionFind from "./union-find";
export default class QuickUnion extends UnionFind {
    constructor(N: number) {
        super(N);
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
        if (rootP === rootQ) return
        this.id[rootP] = rootQ;
        this.components--;
        //Now the p root point to q root thus connected
    }

}