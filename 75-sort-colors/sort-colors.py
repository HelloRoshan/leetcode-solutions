class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        start = 0
        end = len(nums) - 1
        iteration = 0
        while iteration<=end:
            if nums[iteration] == 0:
                nums[iteration] = nums[start]
                nums[start] = 0
                start +=1
                iteration +=1
            elif nums[iteration] == 2:
                nums[iteration] = nums[end]
                nums[end] = 2
                end -=1
            else:
                iteration +=1
        