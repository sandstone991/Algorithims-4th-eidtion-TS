import { exch } from "./sort-helpers";

function heapSort<T>(arr: T[], less: (x: T, y: T) => boolean) {

    (function sort() {
        let length = arr.length - 1;
        //Build max heap(heap ordered array)
        for (let i = Math.floor(length / 2); i >= 0; i--) {
            sink(arr, i, length);
        }
        while (length > 0) {
            exch(arr, 0, length--);//Put the biggest element at the end of the array and then decrease the height of the heap tree by one
            sink(arr, 0, length); //Reheapify
        }
    })()

    function sink(arr: T[], k: number, N = arr.length) {
        //While the childs of this node is not out of range
        while ((2 * k) + 1 <= N) {
            let child = (2 * k) + 1;
            if (child < N && less(arr[child], arr[child + 1])) child++; //Pick the biggest of the two childs
            if (!less(arr[k], arr[child])) break; //no need to do anything
            exch(arr, k, child);
            k = child //The new index is the that of the swapped child
        }
    }
}
//test4
export { heapSort }