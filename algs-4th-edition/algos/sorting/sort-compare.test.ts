import { sortCompare } from "./sort-compare";
import selectionSort from "./selection-sort";
import insertionSort from "./insertion-sort";
import shellSort from "./shell-sort";
describe("sortCompare", () => {
    it("Should run without errors", () => {
        let ratio = sortCompare(insertionSort, selectionSort, 1000, 100);
        console.log(ratio);
        expect(ratio).toBeTruthy;
    })
    // it("Should return resonable ratios", () => {
    //     //I have no idea why this is the case
    //     let ratio = sortCompare(insertionSort, selectionSort, 1000, 10);
    //     expect(ratio).toBeGreaterThan(1.5);
    //     expect(ratio).toBeLessThan(2.5);
    // })
    it('Should return a ratio indicating shellSort is faster than insertion sort', () => {

        let ratio = sortCompare(shellSort, insertionSort, 10000, 100);
        console.log(ratio);
        expect(ratio).toBeGreaterThan(1)
    })
})
