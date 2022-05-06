class MyNode<Item> {

    item: Item | null;
    next: MyNode<Item> | null;
    constructor(item: Item | null = null) {
        this.item = item;
        this.next = null
    }
}

class LinkedList<Item>{
    private head: MyNode<Item> | null = null;
    private tail: MyNode<Item> | null = null;
    length: number = 0;
    constructor(...nodes: (Item | null)[]) {
        if (nodes.length > 0) {
            this.head = new MyNode(nodes[0]);
            this.tail = this.head
        }
        for (let i = 1; i < nodes.length; i++) {
            this.tail!.next = new MyNode(nodes[i]);
            this.tail = this.tail!.next;
        }
        this.length = nodes.length;
    }
    public deleteKthElement(k: number) {
        if (k > this.length || this.head === null) return null;
        let current = this.head;
        for (let i = 0; i < k; i++) {
            current = current.next as MyNode<Item>
        }
        return this.delete(current);

    }
    public delete(node: MyNode<Item> | null) {
        if (node === null) return null
        if (node === this.head) {
            let oldHead = this.head;
            this.head = this.head.next;
            this.length--;
            return oldHead.item;
        }
        let val = node.item;
        node.item = node.next?.item || null;
        node.next = node.next?.next || null;
        this.length--;
        return val;
    }
    public find(key: Item) {
        let index = 0;
        for (let current = this.head; current !== null; current = current.next) {
            if (current.item === key) return index;
            index++;
        }
        return -1
    }
    public max(node: MyNode<number> | null): number {
        if (node === null) { return 0 }
        return Math.max(node.item as number, this.max(node.next));
    }
    public reverse(): void {
        this.tail = this.head;
        let prev = null;
        let current = this.head;
        let next = current?.next || null;
        for (current; current !== null; current = next) {
            next = current.next;
            current.next = prev;
            prev = current;
        }
        this.head = prev;
    }
    public reverseRecursive(): void {
        (function reverse(first: MyNode<Item> | null): (MyNode<Item> | null) {
            if (first === null) return null;
            if (first.next === null) return null;
            let second = first.next;
            let rest = reverse(second);
            second.next = first;
            first.next = null;
            return rest;
        })(this.head);

        [this.head, this.tail] = [this.tail, this.head]
    }
}

export default LinkedList;
