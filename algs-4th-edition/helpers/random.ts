function randomIntNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomId(): string {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(16);
}
export { randomIntNum, randomId };
