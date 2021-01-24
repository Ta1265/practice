/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer = [];
    for (let i = 1; i <= n; i += 1) {
        let element = '';
        if (i % 3 === 0) {
            element += 'Fizz';
        }
        if (i % 5 === 0) {
            element += 'Buzz';
        }
        if (i % 5 !== 0 && i % 3 !== 0) {
            element += i;
        }
        answer.push(element);
    }
    return answer;
};




const tester = function () {
  console.log(fizzBuzz(15));
};

tester();
