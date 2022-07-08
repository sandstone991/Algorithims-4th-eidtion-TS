import { exch } from "./sort-helpers";
export default function insertionSort<T>(a: T[], less: (x: T, y: T) => boolean) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j > 0 && less(a[j], a[j - 1]); j--) {
            exch(a, j, j - 1)
        }
    }
}
function insertionSortWithBounds<T>(a: T[], low: number, high: number, less: (x: T, y: T) => boolean) {
    for (let i = low; i <= high; i++) {
        for (let j = i; j > 0 && less(a[j], a[j - 1]); j--) {
            exch(a, j, j - 1)
        }
    }
}
export { insertionSortWithBounds }