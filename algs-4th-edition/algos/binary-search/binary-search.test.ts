import binarySearch from "./binary-search";
describe('binarySearch', () => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('Finds a non-corner case element', () => {

        expect(binarySearch(arr, 2)).toBe(2);
    })
    it("finds an element if its at the beginning of an array", () => {
        expect(binarySearch(arr, 0)).toBe(0);
    })
})