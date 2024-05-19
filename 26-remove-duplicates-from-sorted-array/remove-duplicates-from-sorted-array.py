class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        start = 0
        next = 1
        duplicates = 0
        end = len(nums) - 1
        while next <= end:
            if nums[start] != nums[next]:
                temp = nums[start+1]
                nums[start+1] = nums[next]
                nums[next] = temp
                start += 1
            else:
                duplicates += 1
            next += 1
        return len(nums) - duplicates