import { exch } from "./sort-helpers";
export default function selectionSort<T>(a: T[], less: (x: T, y: T) => boolean) {
    for (let i = 0; i < a.length; i++) {
        let min = i;
        for (let j = i + 1; j < a.length; j++) {
            if (less(a[j], a[min])) { min = j; }
        }
        exch(a, i, min);
    }
}
