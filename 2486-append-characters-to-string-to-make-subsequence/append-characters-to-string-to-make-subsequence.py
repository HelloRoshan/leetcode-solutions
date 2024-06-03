class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        start = 0
        end = len(s) - 1
        moving = 0
        movingend = len(t) - 1
        while start <= end and moving <= movingend:
            if s[start] == t[moving]:
                moving += 1
                start += 1
            else:
                start += 1
        return len(t) - moving