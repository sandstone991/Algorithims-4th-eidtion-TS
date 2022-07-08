import LinkedListQueue from "../../dataStructures/queue";
import { randomDoubleArr } from "../../helpers/random";
import { mergeSortTopDown, mergeSortBottomUp, fasterMerge, imporvedMergeSortTopDown, mergeSortedQueues } from "./merge-sort";
import { sortCompare } from "./sort-compare";
import { isSorted, numberAscending } from "./sort-helpers";
describe("Recursive merge sort", () => {
    it('should be able to sort strings', () => {
        let arr = 'SORTEXAMPLE'.split('');
        mergeSortTopDown(arr, (x, y) => {
            if (x.charCodeAt(0) < y.charCodeAt(0)) return true
            else return false
        });
        expect(arr.join("")).toBe("AEELMOPRSTX");
    })
    it('Should be able to sort numbers', () => {
        let arr = [10, 9, 8, 7, 6, 5, 4, 3];
        mergeSortTopDown(arr, numberAscending)
        expect(arr).toEqual([3, 4, 5, 6, 7, 8, 9, 10])
    })
    it("odd number of elements shouldn't be a problem", () => {
        let arr = [10, 9, 8, 7, 6];
        mergeSortTopDown(arr, numberAscending)
        expect(arr).toEqual([6, 7, 8, 9, 10])
    })
    it("should be able to sort objects", () => {
        let arr = [{ x: 1 }, { x: -5 }, { x: 5 }, { x: 10 }];
        mergeSortTopDown(arr, (x, y) => {
            return x.x - y.x < 0 ? true : false;
        })
        expect(arr).toEqual([{ x: -5 }, { x: 1 }, { x: 5 }, { x: 10 }])
    })
    it("should be able to handle an empty array", () => {
        let arr: string[] = [];
        mergeSortTopDown(arr, (x, y) => {
            if (x.charCodeAt(0) < y.charCodeAt(0)) return true
            else return false
        })
        expect(arr).toEqual([]);
    })
})
describe("Iterative merge sort", () => {
    it('should be able to sort strings', () => {
        let arr = 'SORTEXAMPLE'.split('');
        mergeSortBottomUp(arr, (x, y) => {
            if (x.charCodeAt(0) < y.charCodeAt(0)) return true
            else return false
        });
        expect(arr.join("")).toBe("AEELMOPRSTX");
    })

    it('Should be able to sort numbers', () => {
        let arr = [10, 9, 8, 7, 6, 5];
        mergeSortBottomUp(arr, numberAscending)
        expect(arr).toEqual([5, 6, 7, 8, 9, 10])
    })
    it("odd number of elements shouldn't be a problem", () => {
        let arr = [10, 9, 8, 7, 6];
        mergeSortBottomUp(arr, numberAscending)
        expect(arr).toEqual([6, 7, 8, 9, 10])
    })
    it("should be able to sort objects", () => {
        let arr = [{ x: 1 }, { x: -5 }, { x: 5 }, { x: 10 }];
        mergeSortBottomUp(arr, (x, y) => {
            return x.x - y.x < 0 ? true : false;
        })
        expect(arr).toEqual([{ x: -5 }, { x: 1 }, { x: 5 }, { x: 10 }])
    })
    it("should be able to handle an empty array", () => {
        let arr: string[] = [];
        mergeSortBottomUp(arr, (x, y) => {
            if (x.charCodeAt(0) < y.charCodeAt(0)) return true
            else return false
        })
        expect(arr).toEqual([]);
    })
})
describe("fasterMerge", () => {
    it('should be able to sort strings', () => {
        let arr = 'SORTEXAMPLE'.split('');
        fasterMerge(arr, (x, y) => {
            if (x.charCodeAt(0) < y.charCodeAt(0)) return true
            else return false
        });
        expect(arr.join("")).toBe("AEELMOPRSTX");
    })

    it('Should be able to sort numbers', () => {
        let arr = [10, 9, 8, 7, 6, 5];
        fasterMerge(arr, numberAscending)
        expect(arr).toEqual([5, 6, 7, 8, 9, 10])
    })
    it("odd number of elements shouldn't be a problem", () => {
        let arr = [10, 9, 8, 7, 6];
        fasterMerge(arr, numberAscending)
        expect(arr).toEqual([6, 7, 8, 9, 10])
    })
    it("should be able to sort objects", () => {
        let arr = [{ x: 1 }, { x: -5 }, { x: 5 }, { x: 10 }];
        fasterMerge(arr, (x, y) => {
            return x.x - y.x < 0 ? true : false;
        })
        expect(arr).toEqual([{ x: -5 }, { x: 1 }, { x: 5 }, { x: 10 }])
    })
    it("should be able to handle an empty array", () => {
        let arr: string[] = [];
        fasterMerge(arr, (x, y) => {
            if (x.charCodeAt(0) < y.charCodeAt(0)) return true
            else return false
        })
        expect(arr).toEqual([]);
    })
})
describe("improvedMergeSort", () => {
    it('should be able to sort strings', () => {
        let arr = 'SORTEXAMPLE'.split('');
        imporvedMergeSortTopDown(arr, (x, y) => {
            if (x.charCodeAt(0) < y.charCodeAt(0)) return true
            else return false
        });
        expect(arr.join("")).toBe("AEELMOPRSTX");
    })

    it('Should be able to sort numbers', () => {
        let arr = [7, 6, 5, 4];
        imporvedMergeSortTopDown(arr, numberAscending)
        expect(arr).toEqual([4, 5, 6, 7])
    })
    it("odd number of elements shouldn't be a problem", () => {
        let arr = [10, 9, 8, 7, 6];
        imporvedMergeSortTopDown(arr, numberAscending)
        expect(arr).toEqual([6, 7, 8, 9, 10])
    })
    it("should be able to sort objects", () => {
        let arr = [{ x: 1 }, { x: -5 }, { x: 5 }, { x: 10 }];
        imporvedMergeSortTopDown(arr, (x, y) => {
            return x.x - y.x < 0 ? true : false;
        })
        expect(arr).toEqual([{ x: -5 }, { x: 1 }, { x: 5 }, { x: 10 }])
    })
    it("should be able to handle an empty array", () => {
        let arr: string[] = [];
        imporvedMergeSortTopDown(arr, (x, y) => {
            if (x.charCodeAt(0) < y.charCodeAt(0)) return true
            else return false
        })
        expect(arr).toEqual([]);
    })
    it('Should be able to handle a big array', () => {
        let arr = randomDoubleArr(0, 10000);
        imporvedMergeSortTopDown(arr, numberAscending)
        expect(isSorted(arr, numberAscending)).toBeTruthy()
    })
    it('Should run faster than regular mergerSort', () => {
        let ratio = sortCompare(imporvedMergeSortTopDown, mergeSortBottomUp, 10000, 100);
        console.log(ratio);
        expect(ratio).toBeGreaterThan(1)
    })
})
describe("mergeSortedQueues", () => {
    it("Should be able to sort merged queues", () => {
        let res = mergeSortedQueues(new LinkedListQueue(...[1, 2, 3]), new LinkedListQueue(...[2, 3, 4, 5]), numberAscending)
        expect(res.isSorted(numberAscending)).toBe(true)
    }
    )

})