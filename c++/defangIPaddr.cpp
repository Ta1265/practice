#include <iostream>
#include<string>
#include<cstring>
/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".

Example:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

 */

class Solution{

public:
    std::string defangIPaddr(std::string address){

        std::string replacement = "[.]";
        for(int i=0; i < address.length(); i++) {
            if (address[i]== '.') {
                address.replace(i,1,replacement);
                i= i+2; //to prevent an infinite loop of reading the same '.'
            }
        }
        return address;
    }
};

int main(){

    std::string line;
    while(getline(std::cin, line)){

        std::string ret = Solution().defangIPaddr(line);
        std::cout<<"output: "<< ret << std::endl;

    }




    return 0;
}