function getAppearingInBoth(arr1: number[], arr2: number[]): number[] {
    let res: number[] = [];
    let p1: number = 0,
        p2: number = 0;
    while (p1 < arr1.length && p2 < arr1.length) {
        if (arr1[p1] === arr2[p2]) {
            res.push(arr1[p1]);
            p1++;
            p2++;
        } else if (arr1[p1] > arr2[p2]) {
            //move p2 to p1 until arr2[p2]>=arr1[p1]
            while (arr2[p2] < arr1[p1] && p2 < arr2.length) {
                p2++;
            }
        } else {
            while (arr1[p1] < arr2[p2] && p1 < arr1.length) {
                p1++;
            }
        }
    }
    return res;
}
