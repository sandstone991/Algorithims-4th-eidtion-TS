import { mergeSortTopDown, mergeSortBottomUp, fasterMerge } from "./merge-sort";
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
        mergeSortTopDown(arr, (x, y) => {
            return x - y < 0 ? true : false;
        })
        expect(arr).toEqual([3, 4, 5, 6, 7, 8, 9, 10])
    })
    it("odd number of elements shouldn't be a problem", () => {
        let arr = [10, 9, 8, 7, 6];
        mergeSortTopDown(arr, (x, y) => {
            return x - y < 0 ? true : false;
        })
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
        mergeSortBottomUp(arr, (x, y) => {
            return x - y < 0 ? true : false;
        })
        expect(arr).toEqual([5, 6, 7, 8, 9, 10])
    })
    it("odd number of elements shouldn't be a problem", () => {
        let arr = [10, 9, 8, 7, 6];
        mergeSortBottomUp(arr, (x, y) => {
            return x - y < 0 ? true : false;
        })
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
        fasterMerge(arr, (x, y) => {
            return x - y < 0 ? true : false;
        })
        expect(arr).toEqual([5, 6, 7, 8, 9, 10])
    })
    it("odd number of elements shouldn't be a problem", () => {
        let arr = [10, 9, 8, 7, 6];
        fasterMerge(arr, (x, y) => {
            return x - y < 0 ? true : false;
        })
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