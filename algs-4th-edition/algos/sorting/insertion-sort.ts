import { exch } from "./sort-helpers";
export default function insertionSort<T>(a: T[], less: (x: T, y: T) => boolean) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j > 0 && less(a[j], a[j - 1]); j--) {
            exch(a, j, j - 1)
        }
    }
}   