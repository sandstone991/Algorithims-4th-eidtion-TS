//How many elements are less than the target
export default function left_bound(nums: number[], target: number) {
    if (nums.length == 0) return -1;
    let left = 0;
    let right = nums.length; // attention

    while (left < right) { // attention
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            /*
            *when you find the target, do not return immediately.
            *Instead, narrow the upper bound of the "search interval" right,
            *and continue searching in the interval [left, mid),
            *that is, continue to shrink to the left to lock the left boundary.
            */
            right = mid; // attention
        }
    }
    return left;
}