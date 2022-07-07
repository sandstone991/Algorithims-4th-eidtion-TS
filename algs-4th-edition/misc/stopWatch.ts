interface StopWatchInterface {
    now(): number
}
class StopWatch implements StopWatchInterface {
    private timeStamp: number;
    constructor() {
        this.timeStamp = Date.now();
    }

    now(): number {
        let res = Date.now() - this.timeStamp;
        this.timeStamp = Date.now();
        return res
    }
}
export default StopWatch;
