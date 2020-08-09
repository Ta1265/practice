//Given a sorted array nums, remove the duplicates in-place such that each element appear only
//once and return the new length.

let removeDuplicates = function(nums) {
	let l = 0;
	let r = 0;

	while (r < nums.length) {
		nums[l] = nums[r];
		l++;
		r++;
		while (nums[r - 1] == nums[r]) {
			// push r forward until we find the next non-duplicate
			r++;
		}
	}
	console.log('in scope', nums);
	return l;
};

nums = [
	1,
	1,
	2,
	2,
	3,
	3,
];
answer = removeDuplicates(nums);
console.log(answer);
console.log('out of scopre', nums);
