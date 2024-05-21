/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let start = 0;
    let end = image.length - 1;
    let row = 0;
    while (start <= end && row < image.length) {
        let temp = image[row][start] ? 0 : 1;
        image[row][start] = image[row][end] ? 0 : 1;
        image[row][end] = temp;
        start++;
        end--;
        if(start> end) {
            row++;
            start = 0;
            end = image.length - 1;
        }
    }
    return image;
};