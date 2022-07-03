type DN<Item> = DoubleNode<Item> | null;
class DoubleNode<Item> {
    item: Item | null;
    next: DN<Item>;
    prev: DN<Item>;
    constructor(item: Item | null = null) {
        this.item = item;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList<Item>{
    private head: DN<Item> = null;
    private tail: DN<Item> = null;
    length: number = 0;
    constructor(...nodes: (Item | null)[]) {
        if (nodes.length > 0) {
            this.head = new DoubleNode(nodes[0]);
            this.head.prev = null;
            this.tail = this.head
        }
        let prev = this.head;
        for (let i = 1; i < nodes.length; i++) {
            this.tail!.next = new DoubleNode(nodes[i]);
            this.tail = this.tail!.next;
            this.tail!.prev = prev;
            prev = this.tail;
        }
        this.length = nodes.length;
    }
}
export default DoublyLinkedList;
