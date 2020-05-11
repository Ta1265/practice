#include <stdio.h>
#include <string>
#include <iostream>
#include <vector>
#include <sstream>
#include <queue>
#include <unordered_map>
#include <algorithm>



/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

using namespace std;

class Solution {
public:
    int singleNumber(vector<int>& nums) {

        std::unordered_map<int,int> myMap;

        int possibleAnswer;

        for(int i=0; i <nums.size(); i++){

            if(myMap.find(nums[i]) != myMap.end()){ //looks up in O(1) time
                myMap[nums[i]] = 2; // seen twice now

            }else{
                myMap[nums[i]] = 1; // store the element as a key  and its contents the count of occurences (1 now because this is first)

            }
        }
        
        for(int i=0; i<nums.size(); i++) { //itterate through the list again find the key with contents = 1
            if (myMap[nums[i]] == 1) {
                return nums[i];
            }
        }

        //run time is O(n+n) = O(n)
        return 0;
    }
};


int main(){


    std::vector<int> nums = {17,12,5,-6,12,4,17,-5,2,-3,2,4,5,16,-3,-4,15,15,-4,-5,-6};
    int answer;

    answer = Solution().singleNumber(nums);




    std::cout<<answer<<std::endl;
//    for(int i=0; i<nums.size();i++){
//        std::cout<<nums[i]<<',';
//    }
//    std::cout<<']';
//    return 0;
}