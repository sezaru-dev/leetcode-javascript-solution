/* 
  Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

  Return the largest lucky integer in the array. If there is no lucky integer return -1.

  

  Example 1:

  Input: arr = [2,2,3,4]
  Output: 2
  Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
  Example 2:

  Input: arr = [1,2,2,3,3,3]
  Output: 3
  Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
  Example 3:

  Input: arr = [2,2,2,3,3]
  Output: -1
  Explanation: There are no lucky numbers in the array.
  

  Constraints:

  1 <= arr.length <= 500
  1 <= arr[i] <= 500
*/

const findLucky = (arr) => {
	const freq = {};

	// Step 1: Count frequency of each number
	for (const num of arr) {
		freq[num] = (freq[num] || 0) + 1;
		//num is value in array
		//set 1(key) : if num is null, set to 0, else increment by 1 (value)
	}

	// Step 2: Find all lucky numbers
	let maxLucky = -1;
	for (const key in freq) {
		const val = Number(key);
		if (freq[key] === val) {
			maxLucky = Math.max(maxLucky, val);
			//Math.max returns the largest of the given numbers
			//if freq[key] is equal to the key, then we have a lucky number
		}
	}

	return maxLucky;
};

console.log(findLucky([2, 2, 3, 4]));
console.log(findLucky([1, 2, 2, 3, 3, 3]));
console.log(findLucky([2, 2, 2, 3, 3]));
