# How long will my program take

# Scientific Method

- Observe
- Hypothesize (a model)
- Predict (using the model)
- Verify (by making further observations)
- Validate (until the hypothesis and obeservations agree)
  We can use the same approach scientists use to study running time for a program by creating a model.
  We can never know for sure that the model is absolutely correct we can only validate that it is consistent with our observations

# Observation

- How much does time increase with varying problem size
- Running time should be insensitive to the input itself rather to the input size
- Easiest observation there is to make a stopwatch and calculate the elapsed time for the program to run

```
//Written in TS
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
```

- Running time on different computers differ only by a constant factor

# Mathematical models

- Some smart guy called Knuth proposed that despite all the complicating factors in understanding the running times of different programs it is possible to build a mathematical model to desribe the running time of any program determined by two primary factors:
- The cost of executing each statement(property of the computer and the complier)
- The frequency of execution of each statement(property of the program and the input)
- If we know both we can multiply them together and sum for all instructions in the program to get the running time
- The challenge is to determine the frequency of execution
- ~F(N) to represent any function that when divided by F(N) approaches 1 as N grows and we write G(N) ~ F(N) to indicate G(N)/F(N) approaches 1 as N grows
- Example for the threesum in the book:
- $$ \lim\limits\_{x→\infin}\frac{(N^3-N^2-N+2)/6}{N^3/6}=1$$
- Instructions that are executed the most frequently play a role in the final total we refer to these instructions as the _inner loop_

# Analysis of algorithms

- Seperate the algorithm from the program that implements it
- Develop knowledge about algorithm's performence and then apply it to any computer/programming language/compiler etc..

# Doubling ratio experiments

- Develop an input generator that produces input that model the inputs expectd
- Run the program DoublingRatio
- Run until the ratios approah a limit $2^b$
- Your program is $O(N^b)$

```
//DoublingTest.ts
import StopWatch from "./stopWatch";
import { randomIntNum } from "../helpers/random";
export default function doublingTest(N: number, toBeTested: Function): number {
    const MAX = 1000000;
    let a: number[] = [];
    for (let i = 0; i < N; i++) {
        a[i] = randomIntNum(-MAX, MAX);
    }
    let timer = new StopWatch();
    let cnt = toBeTested(a);
    return timer.elapsedTime()
}
```

```
//DoublingRatio.ts
import doublingTest from "./DoublingTest";
export default function doublingRatio(toBeTested: Function) {
    let prev: number = doublingTest(125, toBeTested)
    for (let N = 250; true; N += N) {
        let cur = doublingTest(N, toBeTested);
        console.log(`${N}   ${cur}   ${cur / prev}`);
        prev = cur
    }
}
```

# Caveats

There are many reason that you might inconsistent or misleading results when trying to analyze program performance in detail mainly because one or more of the basic assumptions underlying our hypothese might be not quite correct

- **Large constants.** $2N^2+cN ~ 2N^2→2N^2$ but what if $c$ is $10^3$ or $10^6$ the approximation is misleading.
- **Nondominant inner loop.** The cost model might miss the true inner loop, some programs have a coniderably large amount of code outside the innerloop
- **Instruction time.** The assumption that each instruction takes the same amount of time may not always be true. one example is caching
- Example
  if the ratio between every test and its double is 8
  $2^3=8 → O(N^3)$
- System considerations
- Too close to call (dont try to find the "best" implementation)
- **Strong dependance on input.** Running time is sensitive to the input itself (not just the input size)
- **Multiple problem parameters.**

# Coping with dependance on input

# Worst case performence guarantees

- Website that do not use algorithms with performance guarantees are subject to _denial-of-service_ attacks, where hackers flood them with pathological requests that make them run much more slowly than planned

# Randomized Algorithms

- One way to prodvide performance guarantee is to introduce randomness
- Probablistic guarantee running time is good
- the guarantees are not absolute but the chance that they are invalid is less than the chance your computer will be struck by lightenining

# Sequence of operation

- For many applications the sequence of operations will make the performence differ
- For example a sequence of pushing a stack will differ from a sequence of alternating pushing and popping

# Amortized analysis

-Amotize expensive operations on big number of low cost operations to keep the average of all operations low

- One example is resizing the array in an array stack
- $4+8+17+...+N+2N = 5N-4$
- first term accounts for the array access with each of the N calls to Push(), the constant terms account for the array accesses to intialize the data structure each time it doubles the last term is the final intialization of the stack because when you push N times the array will have to double in size to 2N
- The average number of array accesses per operation is constant

# Notes

- Linearithmic $NlogN$
