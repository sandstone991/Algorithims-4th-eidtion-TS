export default function binarySearch(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1; // attention

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] == target)
            return mid;
        else if (nums[mid] < target)
            left = mid + 1;
        else if (nums[mid] > target)
            right = mid - 1;
    }
    return -1;
}
