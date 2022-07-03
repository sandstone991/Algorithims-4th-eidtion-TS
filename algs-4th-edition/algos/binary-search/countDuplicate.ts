import right_bound from "./binary-search-rightbound";
import left_bound from "./binary-search-leftbound";
function countDuplicate(arr: number[], target: number): number {
    return right_bound(arr, target) - left_bound(arr, target) + 1;
}

export { countDuplicate }