function exch<T>(a: T[], i: number, j: number) {
    [a[i], a[j]] = [a[j], a[i]];
}
export { exch }