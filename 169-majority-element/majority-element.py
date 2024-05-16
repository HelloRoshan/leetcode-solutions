class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        elementCount = {}
        majorityElementSize = len(nums)/2
        for num in nums:
            if num in elementCount:
                elementCount[num] += 1
            else:
                elementCount[num] = 1

            if elementCount[num] > majorityElementSize:
                    return num