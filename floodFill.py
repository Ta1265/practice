# An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

# Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

# To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

# At the end, return the modified image.

# Example 1:
# Input: 
# image = [[1,1,1],[1,1,0],[1,0,1]]
# sr = 1, sc = 1, newColor = 2
# Output: [[2,2,2],[2,2,0],[2,0,1]]
# Explanation: 
# From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
# by a path of the same color as the starting pixel are colored with the new color.
# Note the bottom corner is not colored 2, because it is not 4-directionally connected
# to the starting pixel.
# Note:

# The length of image and image[0] will be in the range [1, 50].
# The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
# The value of each color in image[i][j] and newColor will be an integer in [0, 65535].

class Solution:

    def floodFill(self, image, sr, sc, newColor): #returns List[List[int]]

        oldColor = image[sc][sr]


        graphDict = {}

        for col in range(0,len(image)):
            for row in range(0,len(image[col])):
                vertex = (col,row)
                edges = []
                k=0
                #add edges to vertices in its own column
                while( k < row):
                    if(image[col][k] == oldColor):
                        edges.append([col,k])
                    k+=1
                k+=1 #skip itself dont want an edge to itself
                while(k < len(image[col])):
                    if(image[col][k] == oldColor):
                        edges.append([col,k])
                    k+=1
                #add edges to vertices in its own row
                h=0
                while(h < col):
                    if(image[h][row] == oldColor):
                        edges.append([h,row])
                    h+=1
                h+=1
                while(h < len(image)):
                    if(image[h][row] == oldColor):
                        edges.append([h,row])
                    h+=1
                graphDict.update({vertex:edges})

        self.fill(graphDict,image,sc,sr,newColor,oldColor)



        return image

    def fill(self, graphDict, image, sc, sr, newColor,oldColor):

        for pos in graphDict[(sc,sr)] : #iterates through the list edges lists
            if(image[pos[0]][pos[1]] == oldColor):
                image[pos[0]][pos[1]] = newColor
                self.fill(graphDict,image,pos[0],pos[1], newColor,oldColor)
            else: 
                return
        return

    def myGr
            




def main():

    image = [[1,1,1],[1,1,0],[1,0,1]]
    sr = 1 
    sc = 1 
    newColor = 2

    ans = Solution().floodFill(image, sr, sc, newColor)

    print(ans)

if __name__ == '__main__':
    main()