type sortingAlgo = <T>(a: T[], less: (x: T, y: T) => boolean) => void
function exch<T>(a: T[], i: number, j: number) {
    [a[i], a[j]] = [a[j], a[i]];
}
function isSorted<T>(a: T[], less: (x: T, y: T) => boolean): boolean {
    for (let i = 1; i < a.length; i++) {
        if (!less(a[i - 1], a[i])) return false
    }
    return true
}
let numberAscending = (x: number, y: number) => {
    return x - y < 0 ? true : false;
}
export { exch, sortingAlgo, isSorted, numberAscending }
