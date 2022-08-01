import { exch } from "../algos/sorting/sort-helpers"

/*
What's a heap?
A heap is a data structure that can efficiently support the basic priority queues operations.
In a binary heap, the keys are stored in an array such that each key is guaranteed >= the keys
at two other specific positions. In turn, each of those keys must be >= two additional keys,
and so forth. This ordering is easy to see if we biew the keys as being in a binary tree structure
with edges from each key to the two keys known to be smaller.
*/
interface PQInterface<T> {
    isEmpty(): boolean
    size(): number
}
interface MaxPQInterface<T> extends PQInterface<T> {
    max(): T
    delMax(): T
}
interface IndexPQInterface<T> extends PQInterface<T> {
    insert(item: T, k: number): void
    change(k: number, item: T): void
    contains(k: number): boolean
    delete(): void
    key(k: number): T
}
interface MinIndexPQInterface<T> extends IndexPQInterface<T> {
    min(): T
    minIndex(): number
    delMin(): number
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
    private exch(a: number, b: number) {
        exch(this.pq, a, b)
    }
}

// I hate to repeat code but for clarity I won't be using much inheritance here
//Kinda lost motivation coding this one so its untested for now
class MinIndexPQ<T> implements MinIndexPQInterface<T>{
    //pq now holds the index to the corresponding element in the keys array
    //Its the same binary tree structure from before but now as mentioned with indices instead of the actual values
    private pq: (number | null)[] = [];
    private qp: number[] = []; //qp[pq[i]] = pq[qp[i]] = i
    private keys: T[] = [];
    private N: number = 0;
    public less: (a: number, b: number) => boolean;
    constructor(less: (x: T, y: T) => boolean, ...data: T[]) {
        this.less = function (a: number, b: number) {
            return less(this.keys[a], this.keys[b])
        }
        for (let item of data) {
            this.insert(item, this.N)
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
    private exch(a: number, b: number) {
        [this.pq[a], this.pq[b]] = [this.pq[b], this.pq[a]];
        this.qp[this.pq[a] as number] = a;
        this.qp[this.pq[b] as number] = b;
    }
    isEmpty(): boolean {
        return this.N === 0;
    }
    size(): number {
        return this.N;
    }
    contains(k: number): boolean {
        return this.qp[k] !== null
    }
    key(k: number): T {
        if (!this.contains(k)) {
            throw new Error("No such index exists in the priority queue");
        }
        return this.keys[k]
    }
    insert(item: T, k: number): void {
        if (this.contains(k)) {
            throw new Error("Index is already taken");
        }

        this.keys[k] = item;
        this.pq[++this.N] = k;
        this.qp[k] = this.N;
        this.swim(this.N);

    }
    delMin(): number {
        let min: number = this.pq[1] as number //Trust me on that one;
        this.exch(1, this.N--);
        this.sink(1);
        return min;
    }
    min(): T {
        if (this.N === 0) throw new Error("Priority queue was empty when min was called");
        return this.keys[this.pq[1] as number]
    }
    minIndex(): number {
        if (this.N === 0) throw new Error("Priority queue was empty when minIndex was called");
        return this.pq[1] as number
    }
    change(k: number, item: T): void {
        if (!this.pq[k]) {
            return this.insert(item, k);
        }
        if (this.keys[this.pq[k] as number] === item) return
        let swimOrSink;
        if (this.keys[this.pq[k] as number] > item) {
            swimOrSink = this.sink;
        }
        else swimOrSink = this.swim;
        this.keys[k] = item;
        swimOrSink(this.qp[k]);
    }
    delete(): void {

    }

}
export { MaxPQ }