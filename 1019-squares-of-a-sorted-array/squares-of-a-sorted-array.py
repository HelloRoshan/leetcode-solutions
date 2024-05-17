class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        return map(lambda x: x**2, sorted(nums, key = lambda x: abs(x)))