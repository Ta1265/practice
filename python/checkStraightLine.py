# You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 

 

# Example 1:



# Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
# Output: true
# Example 2:



# Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
# Output: false
 

# Constraints:

# 2 <= coordinates.length <= 1000
# coordinates[i].length == 2
# -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
# coordinates contains no duplicate point.


class Solution:

    def checkStraightLine(self, coordinates)-> bool:
        x0, y0 = coordinates[0][0], coordinates[0][1]
        x1, y1 = coordinates[1][0], coordinates[1][1]

        # if they are in a straight line, the slopes of the lines from the 3rd point to the 
        # 2nd point and the 2nd point to the 1st point must be equal and so on we compare all points to 1st and second:
        # to avoid dividing by zero error we multiply instead while not the slop they should still be equal

        for x, y in coordinates:
            slope1 = (x1 - x0) * (y - y1)
            slope2 = (x - x1) * (y1 - y0)
            if slope1 != slope2:
                return False
        return True
            
def main():

    coords1 = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]] #False
    coords2 = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] #True
    coords3 = [[-7,-3],[-7,-1],[-2,-2],[0,-8],[2,-2],[5,-6],[5,-5],[1,7]]

    ans = Solution().checkStraightLine(coords3)

    print(ans)

if __name__ == '__main__':
    main()
