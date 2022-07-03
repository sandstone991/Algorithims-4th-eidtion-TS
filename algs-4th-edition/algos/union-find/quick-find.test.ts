import QuickFind from "./quick-find";
describe('QuickFind', () => {
    it('should pass test case 1', () => {
        let quickFind = new QuickFind(10);
        let arr = [[4, 3], [3, 8], [6, 5], [9, 4], [2, 1], [8, 9], [5, 0], [7, 2], [6, 1], [1, 0], [6, 7]];
        for (let i = 0; i < arr.length; i++) {
            quickFind.union(arr[i][0], arr[i][1]);
        }
        expect(quickFind.count()).toBe(2);
    })
})