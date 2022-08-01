import { randomDoubleArr } from "../../helpers/random";
import { heapSort } from "./heap-sort";
import { isSorted, numberAscending } from "./sort-helpers";
describe("function heapSort", () => {
    it('should be able to sort strings', () => {
        let arr = 'SORTEXAMPLE'.split('');
        heapSort(arr, (x, y) => {
            if (x.charCodeAt(0) < y.charCodeAt(0)) return true
            else return false
        });
        expect(arr.join("")).toBe("AEELMOPRSTX");
    })
    it('Should be able to sort numbers', () => {
        let arr = [10, 9, 8, 7, 6, 5, 4, 3];
        heapSort(arr, numberAscending)
        expect(arr).toEqual([3, 4, 5, 6, 7, 8, 9, 10])
    })
    it("odd number of elements shouldn't be a problem", () => {
        let arr = [10, 9, 8, 7, 6];
        heapSort(arr, numberAscending)
        expect(arr).toEqual([6, 7, 8, 9, 10])
    })
    it("should be able to sort objects", () => {
        let arr = [{ x: 1 }, { x: -5 }, { x: 5 }, { x: 10 }];
        heapSort(arr, (x, y) => {
            return x.x - y.x < 0 ? true : false;
        })
        expect(arr).toEqual([{ x: -5 }, { x: 1 }, { x: 5 }, { x: 10 }])
    })
    it("should be able to handle an empty array", () => {
        let arr: string[] = [];
        heapSort(arr, (x, y) => {
            if (x.charCodeAt(0) < y.charCodeAt(0)) return true
            else return false
        })
        expect(arr).toEqual([]);
    })
    it("should be able to handle big arrays", () => {
        let bigArr = randomDoubleArr(-1000000, 1000000);
        heapSort(bigArr, numberAscending);
        expect(isSorted(bigArr, numberAscending)).toBe(true)
    })
})