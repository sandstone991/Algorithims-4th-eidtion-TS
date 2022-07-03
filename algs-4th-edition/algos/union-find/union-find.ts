interface UnionFindInterface {
    union(p: number, q: number): void
    find(p: number): number
    connected(p: number, q: number): boolean
    count(): number
}
export default abstract class UnionFind implements UnionFindInterface {
    protected id: number[];
    protected components: number;
    constructor(N: number) {
        this.id = [];
        this.components = N;
        for (let i = 0; i < N; i++) {
            //Every node points to itself at the beginning 
            this.id.push(i)
        }
    }
    public count(): number {
        return this.components
    }
    public abstract find(p: number): number
    public abstract union(p: number, q: number): void;
    public connected(p: number, q: number): boolean {
        return this.find(p) == this.find(q);
    }

}