class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = ['a', 'e', 'i', 'o', 'u']
        start = 0
        end = len(s) - 1
        str = list(s)
        while start <= end:
            if str[start].lower() in vowels:
                if str[end].lower() in vowels:
                    temp = str[start]
                    str[start] = str[end]
                    str[end] = temp
                    start +=1
                end -=1
            else:
                start +=1
        return ''.join(str)