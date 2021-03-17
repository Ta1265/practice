# 403. Frog Jump
# A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.

# Given a list of stones' positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit.

# If the frog's last jump was k units, its next jump must be either k - 1, k, or k + 1 units. The frog can only jump in the forward direction.


# Example 1:

# Input: stones = [0,1,3,5,6,8,12,17]
# Output: true
# Explanation: The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd stone, then 2 units to the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone.
# Example 2:

# Input: stones = [0,1,2,3,4,8,9,11]
# Output: false
# Explanation: There is no way to jump to the last stone as the gap between the 5th and 6th stone is too large.


# Constraints:

# 2 <= stones.length <= 2000
# 0 <= stones[i] <= 231 - 1
# stones[0] == 0

class Solution():
    def canCross(self, stones):
        stoneDict = {i: n for n, i in enumerate(stones)}
        badpathMemo = set()  # sets of tuples (pos, k)

        return self.recurse(1, 1, stones, badpathMemo, stoneDict)

    def recurse(self, pos, k, stones, badpathMemo, stoneDict):
        if pos == stones[-1]:
            return True
        if (pos, k) in badpathMemo:
            return False
        if k <= 0:
            return False
        if pos not in stoneDict:
            return False
        for dist in [k-1, k, k+1]:
            if self.recurse(pos + dist, dist, stones, badpathMemo, stoneDict):
                return True
        badpathMemo.add((pos, k))
        return False

    #     target = stones[-1]  # last stone in arr
    #     stones = set(stones)  # stones for constant time lookup
    #     memo = set()  # bad (position, jumpdist)'s we have already seen and can skip

    #     return self.backtrack(stones, 1, 1, target, memo)

    # def backtrack(self, stones, pos, jump, target, memo):
    #     if (pos, jump) in memo:
    #         return False  # if we have already visited here exit
    #     if pos == target:
    #         return True  # we have reached the end
    #     if jump <= 0 or pos not in stones:
    #         return False  # no reachable stone with jump dist
    #     for j in (jump-1, jump, jump+1):
    #         if self.backtrack(stones, pos+j, j, target, memo):
    #             return True
    #     memo.add((pos, jump))  # record bad positions / jumps
    #     return False


def main():
    print(Solution().canCross([0, 1, 3, 5, 6, 8, 12, 17]))
    print(Solution().canCross([0, 1, 2, 3, 4, 8, 9, 11]))


if __name__ == '__main__':
    main()
