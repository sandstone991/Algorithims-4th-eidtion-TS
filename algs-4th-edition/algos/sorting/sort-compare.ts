import { randomDoubleArr } from '../../helpers/random'
import StopWatch from '../../misc/stopWatch'
import { sortingAlgo } from './sort-helpers';
export function sortCompare(sortAlg1: sortingAlgo, sortAlg2: sortingAlgo, numOfItems: number, numOfTrials: number): number {
    let totalTime1 = 0;
    let totalTime2 = 0;
    let stopWatch = new StopWatch
    for (let i = 0; i < numOfTrials; i++) {
        let arr1 = randomDoubleArr(-numOfItems / 2, numOfItems / 2);
        let arr2 = [...arr1];
        stopWatch.now()
        sortAlg1(arr1, (x, y) => {
            return x - y < 0 ? true : false;
        })
        totalTime1 += stopWatch.now();
        stopWatch.now();
        sortAlg2(arr2, (x, y) => {
            return x - y < 0 ? true : false;
        })
        totalTime2 += stopWatch.now();
    }
    return totalTime2 / totalTime1;
}