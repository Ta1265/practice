class Solution:
    def findJudge(self, N, trust):
        if N == 1:
            return 1
        
        myDict = {}
        trusters = []
        for pair in trust:
            trusters.append(pair[0])
            if(myDict.get(pair[1]) == None):
                myDict.update({pair[1]:1})

            else:
                myDict[pair[1]] += 1
                if(myDict.get(pair[0]) == None):
                    myDict.update({pair[0]:0})
                else:
                    myDict[pair[0]] -= 1

        for person, trustcount in myDict.items():

            if trustcount == N-1 and person not in trusters:

                return person


        return -1

        


def main():

    truth = [[1,2],[2,1]]
    N = 2

    ans = Solution().findJudge(N, truth)
    print(ans)

if __name__ == '__main__':
    main()