


class Solution:

    def isValidSudoku(self, board):

        seen = {} #{unqiue
        for col in range(0,9):
            for row in range(0,9):
                val = board[col][row]
                if(val != "."):
                    ## add string location value to value at the position to make it unique to the row, col, and box
                    col_val = val + "col" + str(col)
                    row_val = val + "row" + str(row)
                    box_val = val + "box" + str(col//3) + "," + str(row//3)

                    if col_val in seen or row_val in seen or box_val in seen:
                        return False                  
                    else:
                        seen.update({col_val:True})
                        seen.update({row_val:True})
                        seen.update({box_val:True})

        return True
                
        




        
def main():

    board1 = [
      ["5","3",".",".","7",".",".",".","."],
      ["6",".",".","1","9","5",".",".","."],
      [".","9","8",".",".",".",".","6","."],
      ["8",".",".",".","6",".",".",".","3"],
      ["4",".",".","8",".","3",".",".","1"],
      ["7",".",".",".","2",".",".",".","6"],
      [".","6",".",".",".",".","2","8","."],
      [".",".",".","4","1","9",".",".","5"],
      [".",".",".",".","8",".",".","7","9"]
    ]

    board2 = [
      ["8","3",".",".","7",".",".",".","."],
      ["6",".",".","1","9","5",".",".","."],
      [".","9","8",".",".",".",".","6","."],
      ["8",".",".",".","6",".",".",".","3"],
      ["4",".",".","8",".","3",".",".","1"],
      ["7",".",".",".","2",".",".",".","6"],
      [".","6",".",".",".",".","2","8","."],
      [".",".",".","4","1","9",".",".","5"],
      [".",".",".",".","8",".",".","7","9"]
    ]

    ans = Solution().isValidSudoku(board1)

    if(ans):
        print(ans)
        print("Sudoku board is VALID")
    else:
        print(ans)
        print("Sudoku board is NOT VALID")
    


if __name__ == '__main__':
    main()    
