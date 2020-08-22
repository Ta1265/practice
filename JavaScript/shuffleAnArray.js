/*
Shuffle a set of numbers without duplicates.

Example:

// Init an array with set 1, 2, and 3.
int[] newNums = {1,2,3};
Solution solution = new Solution(newNums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();

*/



/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.original = nums;
};

Solution.prototype.reset = function () {
    return this.original
}


Solution.prototype.shuffle = function () {
    let shuffle = this.original.slice(0);
    let n = shuffle.length;

    for (let i = 0; i < n; i++) {
        let randPos = Math.floor((Math.random() * n))
        let swap = shuffle[i];
        shuffle[i] = shuffle[randPos];
        shuffle[randPos] = swap;
    }
    return shuffle;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

nums = [1, 2, 3]
let obj = new Solution(nums);
let param_2 = obj.shuffle();
let param_1 = obj.reset();

console.log(param_2, param_1);
