// 1/17/24 - 88. Merge Sorted Array
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
// Constraints:
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109
// Follow up: Can you come up with an algorithm that runs in O(m + n) time?
// SOLUTION:
function merge(nums1, m, nums2, n) {
    nums1.splice.apply(nums1, __spreadArray([m, n], nums2, false));
    nums1.sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        else {
            return 0;
        }
    });
}
// 1/25/24 - 27. Remove Element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:
// The judge will test your solution with the following code:
// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.
// int k = removeElement(nums, val); // Calls your implementation
// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.
// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Constraints:
// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100
function removeElement(nums, val) {
    var k = nums.length;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            nums.push(-1);
            k--;
            i--;
        }
        if (nums[i] === -1) {
            return k;
        }
    }
    return k;
}
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// 52. N-Queens II
// Difficulty: Hard
// Problem: 
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
// Given an integer n, return the number of distinct solutions to the n-queens puzzle.
// Example 1:
// Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
// Example 2:
// Input: n = 1
// Output: 1

// Constraints:

// 1 <= n <= 9


// Next Steps:
// - fill squareOnLine with squares
// - Add a function to check if a square is occupied by a queen
var totalNQueens = function(n) {
    // x0, y0 is bottom left corner
    if (n === 1) return 1;

    let solutions = null;
    let board = {
        rows: [],
        cols: [],
        diags: [],
        antiDiags: [],
        queenPositions: []
    }

    for (let i = 0; i < n; i++) {
        let row = {
            line: {
                y: i
            },
            squaresOnLine: []
        }
        let col = {
            line: {
                x: i
            },
            squaresOnLine: []
        }
        board.rows.push(row);
        board.cols.push(col);
    }

    for (let i = -n + 1; i < n; i++) {
        let diag = {
            line: {
                slope: 1,
                yIntercept: i
            },
            squaresOnLine: []
        }
        let antiDiag = {
            line: {
                slope: -1,
                yIntercept: i + n
            },
            squaresOnLine: []
        }
        board.diags.push(diag);
        board.antiDiags.push(antiDiag);
    }

    console.log(`n = ${n}`, board);
    return solutions;
};

for (let i = 1; i <= 9; i++) {
    totalNQueens(i);
}