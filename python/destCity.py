class Solution:
    def destCity(self, paths) -> str:
        count = 0
        myDict = {} #src,dest

        for i in paths:
            myDict[i[0]] = i[1]
            print(i[0] , i[1])
        for i in paths:
            for j in i:
                if myDict.get(j) == None:
                    return j
            








def main():

    paths = [["B","C"],["D","B"],["C","A"]]
    print(Solution().destCity(paths))
    

if __name__ == '__main__':
    main()