import { countDuplicate } from "./countDuplicate";
describe('countDuplicate', () => {
    it("returns the right number of duplicates if its none of the corner cases", () => {
        expect(countDuplicate([1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9], 3)).toBe(3);
    })
    it("returns 0 when the number isn't in the array", () => {
        expect(countDuplicate([1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9], 10)).toBe(0);
    })
    it("returns 1 when the number has only 1 occurance", () => {
        expect(countDuplicate([1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9], 1)).toBe(1);
    })
})