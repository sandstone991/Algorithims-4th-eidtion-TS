
function mergeSortTopDown<T>(a: T[], low: number, high: number, less: (x: T, y: T) => boolean): void {
    (function sort(a: T[], low: number, high: number): void {
        if (high <= low) return;
        let mid: number = Math.floor((high - low) / 2) + low;
        sort(a, low, mid)        //sort left arr
        sort(a, mid + 1, high); //sort right arr
        merge(a, low, mid, high);
    })(a, low, high)
    function merge(a: T[], low: number, mid: number, high: number): void {
        let i = low, j = mid + 1
        let aux = a.slice(low, high + 1)
        //k orArr counter i arr1 counter j arr2 counter
        for (let k = low; k <= high; k++) {
            //if arr1 is done dump the rest in array2
            if (i > mid) a[k] = aux[j++];
            //if arr2 id done dump the rest in array1
            else if (j > high) a[k] = aux[i++];
            //if both are not done compare to see who goes into the ogArr
            else if (less(aux[j], aux[i])) a[k] = aux[j++];
            else a[k] = aux[i++];
        }
    }
}