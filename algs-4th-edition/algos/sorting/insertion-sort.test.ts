import insertionSort from "./insertion-sort";
describe("insertionSort", () => {
    it('should be able to sort strings', () => {
        let arr = 'SORTEXAMPLE'.split('');
        insertionSort(arr, (x, y) => {
            if (x.charCodeAt(0) < y.charCodeAt(0)) return true
            else return false
        });
        expect(arr.join("")).toBe("AEELMOPRSTX");
    })
    it('Should be able to sort numbers', () => {
        let arr = [10, 9, 8, 7, 6];
        insertionSort(arr, (x, y) => {
            return x - y < 0 ? true : false;
        })
        expect(arr).toEqual([6, 7, 8, 9, 10])
    })
    it("should be able to sort objects", () => {
        let arr = [{ x: 1 }, { x: -5 }, { x: 5 }, { x: 10 }];
        insertionSort(arr, (x, y) => {
            return x.x - y.x < 0 ? true : false;
        })
        expect(arr).toEqual([{ x: -5 }, { x: 1 }, { x: 5 }, { x: 10 }])
    })
    it("should be able to handle an empty array", () => {
        let arr: string[] = [];
        insertionSort(arr, (x, y) => {
            if (x.charCodeAt(0) < y.charCodeAt(0)) return true
            else return false
        })
        expect(arr).toEqual([]);
    })

})
