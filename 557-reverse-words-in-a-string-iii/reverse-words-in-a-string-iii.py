class Solution:
    def reverseWords(self, s: str) -> str:
        strArray = s.split()

        for index, word in enumerate(strArray):
            start = 0
            end = len(word) - 1
            charArray = list(word)
            # can use python reversed() function instead
            while start <= end:
                temp = charArray[start]
                charArray[start] = charArray[end]
                charArray[end] = temp
                start +=1
                end -=1
            strArray[index] = ''.join(charArray)

        return ' '.join(strArray)