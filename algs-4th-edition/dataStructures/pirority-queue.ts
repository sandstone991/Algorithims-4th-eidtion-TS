import { exch } from "../algos/sorting/sort-helpers"

/*
What's a heap?
A heap is a data structure that can efficiently support the basic priority queues operations.
In a binary heap, the keys are stored in an array such that each key is guaranteed >= the keys
at two other specific positions. In turn, each of those keys must be >= two additional keys,
and so forth. This ordering is easy to see if we biew the keys as being in a binary tree structure
with edges from each key to the two keys known to be smaller.
*/
interface MaxPQInterface<T> {
    insert(item: T): void
    max(): T
    delMax(): T
    isEmpty(): boolean
    size(): number
}


class MaxPQ<T> implements MaxPQInterface<T>{
    private N: number = 0;
    private pq: T[] = [];
    public less: (x: number, y: number) => boolean;
    constructor(less: (x: T, y: T) => boolean, ...data: T[]) {
        this.less = function (a: number, b: number) {
            return less(this.pq[a], this.pq[b])
        }
        for (let item of data) {
            this.insert(item)
        }
    }
    private swim(k: number): void {
        while (k > 1 && this.less(Math.floor(k / 2), k)) {
            this.exch(Math.floor(k / 2), k);
            k = Math.floor(k / 2);
        }
    }
    private sink(k: number) {
        //While the childs of this node is not out of range
        while (2 * k <= this.N) {
            let child = 2 * k;
            if (child < this.N && this.less(child, child + 1)) child++; //Pick the biggest of the two childs
            if (!this.less(k, child)) break; //no need to do anything
            this.exch(k, child);
            k = child //The new index is the that of the swapped child
        }
    }
    isEmpty(): boolean {
        return this.N === 0
    }
    size(): number {
        return this.N;
    }
    insert(item: T): void {
        this.pq[++this.N] = item //Put in the bottom of the binary tree
        this.swim(this.N); //Promote it to its suitable place
    }
    max(): T {
        return this.pq[1]
    }
    delMax(): T {
        let max: T = this.pq[1];
        this.exch(1, this.N--);
        this.sink(1);
        return max;
    }
    exch(a: number, b: number) {
        exch(this.pq, a, b)
    }
}
export { MaxPQ }