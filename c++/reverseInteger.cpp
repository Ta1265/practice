#include <iostream>

/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer
range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the
reversed integer overflows.
*/



class Solution {
public:
    int reverse(int x) {
        int reverse = 0;
        while(x !=0) {
            int digit = x % 10; //3
            x = x / 10;
            //before multiplying reverse by 10, make sure doing so doesnt cause it to overflow the max 32 bit number size
            if(reverse > ((INT32_MAX/10)-digit) || reverse < ((INT32_MIN/10)+digit)){
                return 0;
            }
            reverse = reverse * 10 + digit;
        }
        return reverse;
    }
};


int main(){

    int num = 123;
    std::cout<<Solution().reverse(num)<<std::endl;

    return 0;
}