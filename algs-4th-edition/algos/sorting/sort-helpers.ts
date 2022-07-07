type sortingAlgo = <T>(a: T[], less: (x: T, y: T) => boolean) => void
function exch<T>(a: T[], i: number, j: number) {
    [a[i], a[j]] = [a[j], a[i]];
}
export { exch, sortingAlgo }