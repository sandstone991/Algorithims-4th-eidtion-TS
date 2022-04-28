interface Stack<Item> {
    push(item: Item): void,
    pop(): Item,
    isEmpty(): boolean,
    size(): number
}
class FixedCapacityStack<Item> implements Stack<Item>{
    private stack: Item[] = [];
    private length: number;
    constructor(length: number) {
        this.length = length;
    }
    push(item: Item) {
        if (this.size() < this.length) {
            this.stack.push(item)
        }
    }
    pop(): Item {
        return this.stack.pop()
    }
    isEmpty(): boolean {
        return !!this.size()
    }
    size(): number {
        return this.stack.length
    }
}
class ResizingArrayStack<Item> implements Stack<Item>{
    private stack: Item[] = []
    private resize(max: number): void {
        //there is no point in implementing this method unlike java because the array size is automatically updated anyway
    }
    push(item: Item): void {
        this.stack.push(item)
    }
    pop(): Item {
        return this.stack.pop()
    }
    isEmpty(): boolean {
        return !!this.size()
    }
    size(): number {
        return this.stack.length
    }
}
//Linked list to implement dynamic stack
class MyNode<Item> {
    item: Item | null;
    next: MyNode<Item> | null;
    constructor(item: Item | null = null) {
        this.item = item;
        this.next = null
    }
}
class LinkedListStack<Item> implements Stack<Item>{

    private length: number = 0;
    private head: (MyNode<Item> | null);
    push(item: Item) {
        let oldHead = this.head;
        let newHead = new MyNode(item);
        newHead.next = oldHead;
        this.head = newHead;
        this.length++;
    }
    pop(): Item {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
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
