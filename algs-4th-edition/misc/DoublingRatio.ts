import doublingTest from "./DoublingTest";
export default function doublingRatio(toBeTested: Function) {
    let prev: number = doublingTest(125, toBeTested)
    for (let N = 250; true; N += N) {
        let cur = doublingTest(N, toBeTested);
        console.log(`${N}   ${cur}   ${cur / prev}`);
        prev = cur
    }
}
