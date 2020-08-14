/*
Complete the function splitPairs such that it splits the input string into pairs of
characters. If the input string has a length that is odd, then it should replace the
missing second character of the final pair with an underscore _. Note, an empty string
should make your function produce an empty array.
*/

function splitPairs(input) {
    ans = [];
    for (var i = 0; i < input.length; i += 2) {
        if (input[i + 1] === undefined) {
            var s = input[i] + '_';
            ans.push(s);
        } else {
            var s = input[i] + input[i + 1];
            ans.push(s);
        }
    }
    return ans;
}

s = 'abc';

console.log(splitPairs(s));