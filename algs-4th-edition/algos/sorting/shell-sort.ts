import { exch, sortingAlgo } from "./sort-helpers";

export default function shellSort<T>(a: T[], less: (x: T, y: T) => boolean) {
    let h = 1;
    let len = a.length
    while (h < len / 3) h = 3 * h + 1;
    while (h >= 1) {
        for (let i = h; i < len; i++) {
            for (let j = i; j >= h && less(a[j], a[j - h]); j -= h) exch(a, j, j - h);

        }
        h = Math.floor(h / 3);
    }
}