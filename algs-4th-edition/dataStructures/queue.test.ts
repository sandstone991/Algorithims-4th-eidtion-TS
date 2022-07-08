import LinkedListQueue from "./queue";
describe("Queue", () => {
    let queue = new LinkedListQueue(...[1, 2, 3]);
    it('Should be initalized from an array without a problem', () => {
        expect(queue.peek()).toBe(1);
    })
    it("Checks for sorted queues", () => {
        expect(queue.isSorted((x, y) => {
            return x - y < 0 ? true : false;
        })).toBe(true)
    })
    it("Handles dequeue", () => {
        queue.dequeue()
        queue.dequeue()
        expect(queue.dequeue()).toBe(3)
    })
    it("Handles operations when empty", () => {
        expect(() => queue.dequeue()).toThrow()
        expect(() => queue.peek()).toThrow()
    })
    it("Detects when the queue is empty", () => {
        expect(queue.isEmpty()).toBe(true)
    })
    it("Handles enqueues", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toBe(1);
    })
})