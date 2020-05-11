#include <stdio.h>
#include <string>
#include <iostream>
#include <vector>
#include <sstream>

/*
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [a, b] = [nums[2*i], nums[2*i+1]] (with i >= 0).
For each such pair, there are a elements with value b in the decompressed list.

Return the decompressed list.


Example 1:

Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].


 Constraints:

2 <= nums.length <= 100
nums.length % 2 == 0
1 <= nums[i] <= 100


*/

class Solution{

public:

    int removeDuplicates(std::vector<int>& nums) {

/* lesson learned! !!check i+1<nums.size() first to prevent out of bounds error the order in the if() matters!!!!!
*/
//        for(int i=0; i < nums.size(); i++) {
//            int j = 1;
//            if(i+1 < nums.size() && nums[i] == nums[i+j] ){
//                while((i+j) < nums.size() &&nums[i] == nums[i+j]){
//                    j++;
//                } //j inc 1 extra, but ok. 2nd param of erase non-inclusive(deletes up to point)
//                nums.erase(nums.begin()+i+1, nums.begin() + i + j);
//            }
//        }
//        return nums.size();
//    }

        int j = 0;
        for (int i = 0; i < nums.size(); ++i) {
            //j is always pointing to empty index in its list, nums[i] compairs to its previous non-empty element
            //j and are the same list as per instruction, but think of them as 2 different lists for this example
            if(i==0 || nums[i] != nums[j - 1]) {
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
    }
};



int main(){


    std::string line;

    while(getline(std::cin,line)){

        std::vector<int> nums;

        line = line.substr(1,line.length()-2); //remove []
        std::stringstream ss;
        ss << line;
        std::string item;

        while(getline(ss,item,',')){
            nums.push_back(std::stoi(item));
        }

        int ret;
        Solution sol;
        ret = sol.removeDuplicates(nums);

        std::cout<<'[';
        for(int i=0; i<ret;i++){
            std::cout<<nums[i]<<',';
        }
        std::cout<<']';

    }

    return 0;
}