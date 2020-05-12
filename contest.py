
class Solution:

    def buildArray(self, target, n):

        ans = []

        j = 0 #targ
        i = 1 #n
        while i <= n:
            print ( i, target[j])
            ans.append("Push")
            if i != target[j]:
                ans.append("Pop")
                i += 1
            else:
                j += 1
                i += 1
            if(j == len(target)):
                return ans

        return ans



def main():

    target = [1,2]
    n = 4

    ans = Solution().buildArray(target, n)

    print(ans)

if __name__ == '__main__':
    main()
