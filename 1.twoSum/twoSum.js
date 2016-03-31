/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var indexNums = [],
		i,
		j,
		len = nums.length,
		index1,
		index2;
	for(i = 0; i < len; i++) {
		indexNums.push([i, nums[i]]);
	}
	indexNums.sort(function(a, b) {
		return a[1] > b[1] ? 1 : -1;
	});
	index1 = 0;
	index2 = len - 1;
	for(j = 0; j < len; j++) {
		if(indexNums[index1][1] + indexNums[index2][1] > target) {
			index2 -= 1;
		} else if(indexNums[index1][1] + indexNums[index2][1] < target) {
			index1 += 1;
		} else {
			return [indexNums[index1][0], indexNums[index2][0]].sort(function(a, b) {
				return a > b ? 1 : -1;
			});
		}
	}
};