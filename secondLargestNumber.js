function getSecondLargest(nums) {
    // Complete the function
    // [5, 6, 1, 9, 7, 4, 2, 9]
    let expArr = [];
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            let temp = 0
            if(nums[i] > nums[j]) {
                temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
    for(let i = nums.length-1; i >= 0; i--) {
        if(nums[i] != nums[i-1]) 
            return nums[i-1]
    }
}


console.log(reverseString(Number(1234)))