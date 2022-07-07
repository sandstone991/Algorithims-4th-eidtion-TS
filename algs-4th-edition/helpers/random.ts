function randomIntNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}
function randomDoubleNum(min: number, max: number) {
    return Math.random() * (max - min) + min
}
function randomIntArr(min: number, max: number): number[] {
    if (min > max) { throw new Error("min cannot be greater than max") }
    let N = max - min;
    let res: number[] = [];
    for (let i = 0; i < N; i++) {
        res.push(randomIntNum(min, max));
    }
    return res;
}
function randomDoubleArr(min: number, max: number) {
    if (min > max) { throw new Error("min cannot be greater than max") }
    let N = max - min;
    let res: number[] = [];
    for (let i = 0; i < N; i++) {
        res.push(randomDoubleNum(min, max));
    }
    return res;
}
function randomId(): string {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(16);
}
export { randomIntNum, randomDoubleNum, randomIntArr, randomDoubleArr, randomId };
