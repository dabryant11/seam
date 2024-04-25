/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr = []
    nums.sort((a,b)=>b-a)
    while (nums.length) {
        let alice = nums.pop()
        let bob = nums.pop()
        arr.push(bob)
        arr.push(alice)
    }
    return arr
};