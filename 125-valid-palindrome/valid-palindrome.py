class Solution:
    def isPalindrome(self, s: str) -> bool:
        resultstring = re.sub('[\W_]+', '', s).lower()
        return resultstring  == resultstring[::-1]