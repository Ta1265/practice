#include <iostream>
#include <vector>
#include <algorithm>



/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/



class Solution {
public:
    std::vector<int> intersect(std::vector<int>& nums1, std::vector<int>& nums2) {

        //check if passed an empty
        if(nums1.empty()|| nums2.empty()){
            return {};
        }
        std::vector<int> answer;
        std::vector<int> inner;
        std::vector<int> outer;

        std::sort(nums1.begin(), nums1.end());
        std::sort(nums2.begin(), nums2.end());

        if(nums1.size() < nums2.size()){
            outer = nums2;
            inner = nums1;
        }else{
            outer = nums1;
            inner = nums2;
        }


        int j = 0;
        for(int i = 0; i < outer.size(); i++) {

            while (outer[i] > inner[j]) { // bring j up to speed with i by incrementing it
                if (j + 1 == inner.size()) {return answer;} //if reached the end of smaller inner vector then we are done
                else {j++;}
            }

            if (outer[i] == inner[j]) {
                answer.push_back(outer[i]);
                if (j + 1 == inner.size()) { return answer; } //make sure we can increment j if not we are done
                else { j++; }
            }
        }

        return answer;
    }
};


int main(){


    std::vector<int> nums1 = {1,2,2,1};
    std::vector<int> nums2 = {2,2};
    std::vector<int> answer;

    answer = Solution().intersect(nums1, nums2);

    std::cout<<"[";
    for(int i=0; i<answer.size();i++){
        if(i == answer.size()-1){
            std::cout<<answer[i]<<']'<<std::endl;
        }else{
            std::cout<<answer[i]<<',';
        }
    }

    return 0;
}