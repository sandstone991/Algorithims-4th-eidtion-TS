import UnionFind from "./union-find";
export default class QuickFind extends UnionFind {
    constructor(N: number) {
        super(N);
    }
    public find(p: number): number {
        return this.id[p]
    }
    public union(p: number, q: number): void {
        let pId = this.find(p);
        let qId = this.find(q);
        if (pId === qId) return;
        for (let i = 0; i < this.id.length; i++) {
            if (this.id[i] == pId) this.id[i] = qId;
        }
        this.components--;
    }
}