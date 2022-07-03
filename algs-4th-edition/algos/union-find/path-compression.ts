import WeightedQuickUnion from "./weighted-quick-union";
export default class PathCompression extends WeightedQuickUnion {
    constructor(N: number) {
        super(N);
    }
    public find(p: number): number {
        let temp = p;
        while (this.id[p] !== p) {
            //The root is the node that points to itself
            p = this.id[p];
        }
        let root = p;
        p = temp;
        while (this.id[p] !== p) {
            let temp = this.id[p];
            this.id[p] = root;
            p = temp;
        }
        return p;
    }
}