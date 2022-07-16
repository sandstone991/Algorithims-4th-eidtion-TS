import { numberAscending } from "../algos/sorting/sort-helpers";
import { randomDoubleArr, randomIntArr } from "../helpers/random";
import { MaxPQ } from "./pirority-queue";
describe("Max Priority Queue", () => {
    it('fricking works', () => {
        let arr = randomIntArr(0, 10);
        let max = Math.max(...arr);
        let pq = new MaxPQ(numberAscending, ...arr);
        expect(pq.max()).toBe(max)
        pq.insert(500);
        expect(pq.max()).toBe(500);
        expect(pq.delMax()).toBe(500);
        expect(pq.max()).toBe(max);
    })
})