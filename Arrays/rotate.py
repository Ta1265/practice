"""

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]




NOTE final solution is not a transpose matrix, but transposing is a step we can use


step one  transpose the matrix, swap rows with columns
step two flip the matrix horizontaly(reverse the rows) (python has built in reverse function)
, but we can use 2 pointer method to reverse a list matrix[i][j] = matrix[i][len-1-j]
1 2 3       1 4 7      7 4 1
4 5 6 ->    2 5 8 ->   8 5 2
7 8 9       3 6 9      9 6 3







"""


class Solution():

    def rotate(self, matrix):

        n = len(matrix)

        # step 1 transpose by swapping along the diagnal notice range (row,n)
        for row in range(n):
            for col in range(row, n):
                temp = matrix[row][col]
                matrix[row][col] = matrix[col][row]
                matrix[col][row] = temp
                
        #step 2 reverse the list could use list.reverse(), but do it manually in O(n/2)
        for row in range(n):
            for col in range(n//2): 
                temp = matrix[row][col]
                matrix[row][col] = matrix[row][n-1-col] # n because we asume its a square matrix len(row) = len(col)
                matrix[row][n-1-col] = temp

        return matrix
    

def main():


    matrix = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
    ]

    ans = Solution().rotate(matrix)

    print(ans[0])
    print(ans[1])
    print(ans[2])


if __name__ == '__main__':
    main()
