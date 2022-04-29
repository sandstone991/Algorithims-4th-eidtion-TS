interface Queue<Item> {
    enqueue(item: Item): void,
    dequeue(): Item,
    isEmpty(): boolean,
    size(): number
}
class MyNode<Item> {
    item: Item | null;
    next: MyNode<Item> | null;
    constructor(item: Item | null = null) {
        this.item = item;
        this.next = null
    }
}
class LinkedListQueue<Item> implements Queue<Item>{

    private length: number = 0;
    private head: (MyNode<Item> | null);
    private tail: (MyNode<Item> | null);
    enqueue(item: Item) {
        let node = new MyNode(item)
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.length++;
    }
    dequeue(): Item {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        let returned = this.head.item;
        this.head = this.head.next;
        this.length--;
        return returned;
    }
    isEmpty(): boolean {
        return this.length === 0
    }
    size(): number {
        return this.length
    }

}
