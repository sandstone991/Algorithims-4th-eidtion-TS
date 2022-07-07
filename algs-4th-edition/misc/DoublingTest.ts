import StopWatch from "./stopWatch";
import { randomIntNum } from "../helpers/random";
export default function doublingTest(N: number, toBeTested: Function): number {
    const MAX = 1000000;
    let a: number[] = [];
    for (let i = 0; i < N; i++) {
        a[i] = randomIntNum(-MAX, MAX);
    }
    let timer = new StopWatch();
    timer.now()
    let cnt = toBeTested(a);
    return timer.now()
}
