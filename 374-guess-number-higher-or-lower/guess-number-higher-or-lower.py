# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:

    def guessNumber(self, n: int) -> int:
        if n== 1:
            return n
        
        def guessRecursive(start, end):
            pick = math.trunc((start+end)/2)
            guess_num = guess(pick)

            if guess_num == 0:
                return pick
            elif guess_num == -1:
                return guessRecursive(start, pick-1)
            else:
                return guessRecursive(pick+1, end)

        return guessRecursive(1, n)
        