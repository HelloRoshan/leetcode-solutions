class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
        start = 0
        end = len(s) - 1
        charArray = list(s)
        while start <= end:
            if charArray[start].isalpha():
                if charArray[end].isalpha():
                    temp = charArray[start]
                    charArray[start] = charArray[end]
                    charArray[end] = temp
                    start +=1
                end -=1
            else:
                start +=1
        return ''.join(charArray)