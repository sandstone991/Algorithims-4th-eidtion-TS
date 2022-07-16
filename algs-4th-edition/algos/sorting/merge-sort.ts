import { insertionSortWithBounds } from "./insertion-sort";
import LinkedListQueue from "../../dataStructures/queue";
//Recursive
function mergeSortTopDown<T>(a: T[], less: (x: T, y: T) => boolean): void {
    let aux: T[] = Array(a.length);
    (function sort(a: T[], low: number, high: number): void {
        if (high <= low) return;
        let mid: number = Math.floor((high - low) / 2) + low;
        sort(a, low, mid)        //sort left arr
        sort(a, mid + 1, high); //sort right arr
        merge(a, low, mid, high);
    })(a, 0, a.length - 1)
    function merge(a: T[], low: number, mid: number, high: number): void {
        let i = low, j = mid + 1
        for (let k = low; k <= high; k++) {
            aux[k] = a[k];
        }
        //k orArr counter i arr1 counter j arr2 counter
        for (let k = low; k <= high; k++) {
            //if arr1 is done dump the rest in array2
            if (i > mid) a[k] = aux[j++];
            //if arr2 id done dump the rest in array1
            else if (j > high) a[k] = aux[i++];
            //if both are not done compare to see who goes leto the ogArr
            else if (less(aux[j], aux[i])) a[k] = aux[j++];
            else a[k] = aux[i++];
        }
    }
}
//Iterative
//[5,4,3,2,1,0]
function mergeSortBottomUp<T>(a: T[], less: (x: T, y: T) => boolean): void {
    let aux: T[] = Array(a.length);
    (function sort(a: T[]): void {
        for (let subArrLen = 1; subArrLen < a.length; subArrLen *= 2) {
            for (let low = 0; low < a.length - subArrLen; low += subArrLen * 2) { //low: subarray index
                merge(a, low, low + subArrLen - 1, Math.min(low + 2 * subArrLen - 1, a.length - 1))
            }
        }
    })(a)
    function merge(a: T[], low: number, mid: number, high: number): void {
        let i = low, j = mid + 1
        for (let k = low; k <= high; k++) {
            aux[k] = a[k];
        }
        //k orArr counter i arr1 counter j arr2 counter
        for (let k = low; k <= high; k++) {
            //if arr1 is done dump the rest in array2
            if (i > mid) a[k] = aux[j++];
            //if arr2 id done dump the rest in array1
            else if (j > high) a[k] = aux[i++];
            //if both are not done compare to see who goes leto the ogArr
            else if (less(aux[j], aux[i])) a[k] = aux[j++];
            else a[k] = aux[i++];
        }
    }
}
function fasterMerge<T>(a: T[], less: (x: T, y: T) => boolean): void {

    let aux: T[] = Array(a.length);
    function merge(a: T[], low: number, mid: number, high: number): void {
        let auxIndex = low;

        for (let i = low; i <= mid; i++) {
            aux[auxIndex] = a[i];
            auxIndex++;
        }
        //[low,...,mid,..junk]
        for (let i = high; i >= mid + 1; i--) {
            aux[auxIndex] = a[i];
            auxIndex++;
        }
        //[low,...,mid]+[high,....,mid+1]
        let indexLeft = low;
        let indexRight = high;
        let k = low;

        while (indexLeft <= mid) {
            if (less(aux[indexRight], aux[indexLeft])) a[k] = aux[indexRight--];
            else a[k] = aux[indexLeft++];
            k++;
        }
    }
    (function sort(a: T[], low: number, high: number): void {
        if (high <= low) return;
        let mid: number = Math.floor((high - low) / 2) + low;
        sort(a, low, mid)        //sort left arr
        sort(a, mid + 1, high); //sort right arr
        merge(a, low, mid, high);
    })(a, 0, a.length - 1);

}
function imporvedMergeSortTopDown<T>(a: T[], less: (x: T, y: T) => boolean): void {
    let aux: T[] = [...a];
    (function sort(a: T[], aux: T[], low: number, high: number): void {
        if (high <= low) return;
        if (high - low <= 15) return insertionSortWithBounds(a, low, high, less);
        let mid: number = Math.floor((high - low) / 2) + low;
        sort(aux, a, low, mid)        //sort left arr
        sort(aux, a, mid + 1, high); //sort right arr
        if (a[mid] > a[mid + 1])
            merge(a, aux, low, mid, high);
    })(aux, a, 0, a.length - 1)
    function merge(a: T[], aux: T[], low: number, mid: number, high: number): void {
        let i = low, j = mid + 1
        //k orArr counter i arr1 counter j arr2 counter
        for (let k = low; k <= high; k++) {
            //if arr1 is done dump the rest in array2
            if (i > mid) aux[k] = a[j++];
            //if arr2 id done dump the rest in array1
            else if (j > high) aux[k] = a[i++];
            //if both are not done compare to see who goes leto the ogArr
            else if (less(a[j], a[i])) aux[k] = a[j++];
            else aux[k] = a[i++];
        }
    }
}
function mergeSortedQueues<T>(queue1: LinkedListQueue<T>, queue2: LinkedListQueue<T>, less: (x: T, y: T) => boolean): LinkedListQueue<T> {
    let res = new LinkedListQueue<T>()
    while (!(queue1.isEmpty() || queue2.isEmpty())) {
        if (less(queue1.peek(), queue2.peek())) {
            res.enqueue(queue1.dequeue())
        }
        else {
            res.enqueue(queue2.dequeue())
        }
    }
    let rem: LinkedListQueue<T>;
    if (queue1.isEmpty() && !queue2.isEmpty()) {
        rem = queue2;
    }
    else { rem = queue1; }
    while (!rem.isEmpty()) {
        res.enqueue(rem.dequeue());
    }
    return res;
}

export { mergeSortTopDown, mergeSortBottomUp, fasterMerge, imporvedMergeSortTopDown, mergeSortedQueues }