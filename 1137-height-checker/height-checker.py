class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        count = 0
        expected = sorted(heights)
        for index, height in enumerate(heights):
            if height != expected[index]:
                count += 1
        return count