class Solution:
    def isPalindrome(self, x: int) -> bool:
        xReverse = str(x)[::-1]
        return xReverse == str(x)