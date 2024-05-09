class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        start = 0
        end = len(nums) - 1
        next = 0
        while next<=end:
            if nums[next] != 0: 
                temp = nums[start]
                nums[start] = nums[next]
                nums[next] = temp
                start += 1
            next += 1
        return nums