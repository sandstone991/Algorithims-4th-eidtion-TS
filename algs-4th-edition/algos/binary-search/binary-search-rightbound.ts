//How many elements are more than the target
export default function right_bound(nums: number[], target: number) {
    if (nums.length == 0) return -1;
    let left = 0, right = nums.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            left = mid + 1; // attention
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }
    return left - 1; // attention
}