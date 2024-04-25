/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    
    let nums = grid.flat()
    nums.sort()
    let arr = []

    for (let i =0; i< nums.length -1 ; i++ ) {
        let left = i
        let right = left++
        if ( nums[left] == nums[right]) {
            arr.push(nums[left])
        }
    }

    for ( let j = 1; j<= nums.length; j ++) {
        if (!nums.includes(j)){
            arr.push(j)
        }
    }
   

    return arr.length < 2 ? arr.push(nums[nums.length] + 1) : arr
};