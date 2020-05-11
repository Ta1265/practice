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

nums.
class Solution{

public:

    int removeDuplicates(vector<int>& nums) {

        for(int i=0; i < nums.size(); i++){
            int cur = num[i];
            int count = 1;
            while(nums[i+count] == cur){
                count++;
            }
            nums.erase(i+1,count);
            nums.erase()
            sersfd =

        }

    }

};


std::vector<int> stringToIntegerVector(std::string input) {

    std::vector<int> output;
    //remove "[ ]" from front and back
    input = input.substr(1,input.length()-2);

    //put in ss so that it can be converted to integer
    std::stringstream ss;
    ss << input;

    //getline info input ss object, return item from between delimeter, delimeter in this case ','
    //item is a string type now even if only a single character long, so we can now use stoi on it
    std::string item;
    while(std::getline(ss,item,',')){
        output.push_back(std::stoi(item));
    }
    return output;

}

std::string vectorIntegerToString(std::vector<int> input){

    std::string output;



    for(int i = 0; i<input.size(); i++){
        int num = input[i];
        output = output + std::to_string(num) + ',';
    }
    //remove the final extra ','
    output = output.substr(0,output.length()-1);

    return "[" + output + "]";

}

int main(){


    std::string line;
    while(getline(std::cin, line)){

        std::vector<int> nums;
        nums = stringToIntegerVector(line);


        std::vector<int> ret;
        Solution sol;
        ret = sol.decompressRLElist(nums);

        std::cout << vectorIntegerToString(ret) << std::endl;

    }


    return 0;
}