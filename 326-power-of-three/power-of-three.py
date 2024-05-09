class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n==1:
            return True

        if n%3 != 0 or n < 3:
            return False

        remainder = n/3

        if remainder % 1 != 0:
            return False

        if remainder == 1:
            return True

        return self.isPowerOfThree(remainder)