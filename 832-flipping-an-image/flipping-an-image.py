class Solution:
    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
        start = 0
        end = len(image) - 1
        row = 0
        while start <= end and row < len(image):
            temp = 1 if image[row][start] == 0 else 0
            image[row][start] = 1 if image[row][end] == 0 else 0
            image[row][end] = temp
            start +=1
            end -=1
            if start> end:
                row +=1
                start = 0
                end = len(image) - 1
        return image