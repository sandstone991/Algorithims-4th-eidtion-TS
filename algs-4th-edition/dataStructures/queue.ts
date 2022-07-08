interface Queue<Item> {
    enqueue(item: Item): void,
    dequeue(): Item,
    isEmpty(): boolean,
    size(): number,
    peek(): Item
}
class MyNode<Item> {
    item: Item | null;
    next: MyNode<Item> | null;
    constructor(item: Item | null = null) {
        this.item = item;
        this.next = null
    }
}
export default class LinkedListQueue<Item> implements Queue<Item>{

    private length: number = 0;
    private head: (MyNode<Item> | null) = null;
    private tail: (MyNode<Item> | null) = null;
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
    enqueue(item: Item) {
        let node = new MyNode(item)
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail!.next = node;
            this.tail = this.tail!.next;
        }
        this.length++;
    }
    dequeue(): Item {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        let returned = this.head!.item;
        this.head = this.head!.next;
        this.length--;
        return returned as Item;
    }
    isEmpty(): boolean {
        return this.length === 0
    }
    size(): number {
        return this.length
    }
    peek(): Item {
        if (this.length === 0) throw new Error("Nothing to peek at since queue is empty")
        return this.head!.item as Item
    }
    isSorted(less: (x: Item, y: Item) => boolean) {
        let cur = this.head;
        while (true) {
            if (cur!.next) {
                if (less(cur!.next.item as Item, cur!.item as Item))
                    return false
                cur = cur!.next
            }
            else return true
        }
    }
}
