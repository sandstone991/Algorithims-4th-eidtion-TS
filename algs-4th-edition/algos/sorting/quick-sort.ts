import { exch } from "./sort-helpers";

function quickSort<T>(a: T[], less: (x: T, y: T) => boolean): void {
    (function sort(a: T[], low: number, high: number): void {
        if (high <= low) return;
        let j = partition(a, low, high);
        sort(a, low, j - 1);
        sort(a, j + 1, high)
    })(a, 0, a.length - 1)
    function partition(a: T[], low: number, high: number): number {
        let leftIndex: number = low, rightIndex: number = high + 1;
        let partitioningItem: T = a[low]
        while (true) {
            while (less(a[++leftIndex], partitioningItem) && leftIndex != high) { /*Find an element on the left bigger than PI*/ }
            while (less(partitioningItem, a[--rightIndex]) && rightIndex != low) { /*Find an element on the right smaller than PI*/ }
            if (leftIndex >= rightIndex) break;
            exch(a, leftIndex, rightIndex); //swap them so in the end all the elements on the left is smaller and on the right are bigger than the pivot
        }
        exch(a, low, rightIndex);
        return rightIndex;
    }
}

function quick3way<T>(a: T[], less: (x: T, y: T) => boolean): void {

}
export { quickSort }