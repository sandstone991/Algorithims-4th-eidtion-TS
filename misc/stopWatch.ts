interface StopWatch {
    /*
    *@return {number} time since created in seconds
    */
    elapsedTime(): number
}
class StopWatch implements StopWatch {
    private readonly timeStamp: number;
    constructor() {
        this.timeStamp = Date.now();
    }
    elapsedTime(): number {
        return (Date.now() - this.timeStamp) / 1000;
    }
}
export default StopWatch;
