#include <iostream>
#include <vector>
#include <unordered_map>


//Two sums

//Given an array of integers, return indices of the two numbers
//such that they add up to a specific target.
//
//You may assume each input would have exactly one solution.
//Example: given nums = [2, 7, 11, 15], target = 9
//nums[0] + nums[1] = 2 + 7 = 9, return [0,1]




std::vector<int> twoSums(std::vector<int> numbers, int target) {

    std::unordered_map<int,int> myMap;

    std::vector<int> retvect;

    std::unordered_map<int,int>::iterator it = myMap.begin();
    for(int i=0; i< numbers.size(); i++){

        int numNeeded = target - numbers[i];
        //using myMap.at(key) gives run time error if not found, use myMap.find() instead

        //using myMap.find(key) returns an iterator with the value or end() if not found


        if(myMap.find(numNeeded) != myMap.end()){
            retvect.push_back(myMap[numNeeded]); // returns the index of in the map
            retvect.push_back(i); //remember we need indices not numbers
        }
        //if numNeeded not in map then put the numbers[i] into the map for later lookup if needed
        myMap[numbers[i]] = i;
        //key       index
    }
    return retvect;




}
int main()

{
    std::vector<int> nums = {2,7,11,15,};
    int target = 9;

    std::vector<int> result;

    result = twoSums(nums, target);

    std::cout<<"["<<result[0]<<", "<< result[1]<<"]"<<std::endl;

    return 0;
}

