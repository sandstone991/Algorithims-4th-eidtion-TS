import PathCompression from "./path-compression";
describe("PathCompression", () => {

    it('Should have 7 componenets', () => {
        let pathCompression = new PathCompression(10);
        pathCompression.union(0, 1);
        pathCompression.union(2, 3);
        pathCompression.union(3, 4);
        pathCompression.union(2, 4);
        expect(pathCompression.count()).toBe(7)
    })
    it('Should have 3 componenets', () => {
        let pathCompression = new PathCompression(19);
        pathCompression.union(0, 1);
        pathCompression.union(0, 2);
        pathCompression.union(0, 3);
        pathCompression.union(6, 7);
        pathCompression.union(8, 9);
        pathCompression.union(6, 8);
        pathCompression.union(0, 6);
        pathCompression.union(10, 11);
        pathCompression.union(10, 12);
        pathCompression.union(10, 13);
        pathCompression.union(10, 14);
        pathCompression.union(10, 15);
        pathCompression.union(10, 16);
        pathCompression.union(10, 17);
        pathCompression.union(10, 18);
        pathCompression.union(0, 10);

        expect(pathCompression.count()).toBe(3)
    })
})